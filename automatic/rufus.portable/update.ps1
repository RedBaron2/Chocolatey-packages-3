$ErrorActionPreference = 'Stop'
import-module au
$toolsDir = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$toolsDir = join-path $toolsDir "tools"
$releases = 'https://github.com/pbatard/rufus/releases'

function global:au_SearchReplace {
    @{
        ".\tools\chocolateyInstall.ps1" = @{
            "(^[$]url\s*=\s*)('.*')"          = "`$1'$($Latest.URS32)'"
            "(^[$]checksum\s*=\s*)('.*')"          = "`$1'$($Latest.Checksum32)'"
            "(^[$]checksumType\s*=\s*)('.*')"          = "`$1'$($Latest.ChecksumType32)'"
        }
    }
}

function global:au_GetLatest {
    $url32 = "https://github.com$($((Invoke-WebRequest -Uri $releases -UseBasicParsing).Links | Where-Object {$_.href -match "rufus-"} | where-object {$_.href -match 'p.exe'} | Select-Object -First 1).href)"
    $version = $url32 -split 'v|/' | select-object -Last 1 -Skip 1
    $version = $version.replace('_','-')

    return @{ URL32 = $url32; Version = $version }
}

update-package -ChecksumFor 32