// ==UserScript==
// @name         WMESTSData
// @namespace    https://gitlab.com/WMEScripts
// @version      2019.10.26.01
// @description  Datas for the script WME-send-to-slack
// @author       Tunisiano18
// @match        http://*/*
// @grant        none
// ==/UserScript==

var _0xd3cc=["\x33\x30\x2D\x64\x65\x6D\x61\x6E\x64\x65\x73\x5F\x77\x6D\x65\x5F\x61\x75\x74\x6F","\x42\x65\x6C\x67\x69\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x43\x4B\x51\x43\x4D\x39\x51\x53\x2F\x42\x44\x51\x53\x42\x46\x48\x45\x30\x2F\x5A\x68\x7A\x69\x79\x61\x36\x71\x71\x4B\x32\x68\x52\x70\x35\x62\x45\x77\x4C\x70\x59\x63\x50\x4B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F\x31\x46\x41\x49\x70\x51\x4C\x53\x66\x75\x77\x54\x54\x73\x42\x65\x4E\x38\x74\x70\x71\x49\x53\x50\x6B\x71\x44\x67\x76\x70\x45\x4C\x65\x76\x43\x4D\x57\x54\x43\x47\x4B\x53\x66\x34\x36\x70\x72\x65\x41\x57\x2D\x79\x37\x42\x6E\x67\x2F\x66\x6F\x72\x6D\x52\x65\x73\x70\x6F\x6E\x73\x65","\x6E\x6F","\x4C\x75\x78\x65\x6D\x62\x6F\x75\x72\x67","\x4E\x65\x74\x68\x65\x72\x6C\x61\x6E\x64\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6F\x6B\x73\x2E\x73\x6C\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x73\x65\x72\x76\x69\x63\x65\x73\x2F\x54\x30\x33\x37\x41\x54\x32\x4B\x4E\x2F\x42\x44\x45\x31\x58\x4C\x33\x38\x54\x2F\x72\x6F\x41\x4A\x73\x6A\x4D\x73\x78\x57\x39\x33\x6D\x53\x4D\x77\x72\x31\x70\x46\x72\x63\x75\x6A","\x44\x65\x66\x61\x75\x6C\x74\x28\x42\x65\x29","\x46\x72\x61\x6E\xE7\x61\x69\x73","\x4E\x65\x64\x65\x72\x6C\x61\x6E\x64\x73","\x45\x6E\x67\x6C\x69\x73\x68","\x32\x39\x2D\x66\x72\x5F\x64\x65\x6D\x61\x6E\x64\x65\x73\x5F\x77\x6D\x65","\x32\x39\x2D\x76\x6C\x5F\x72\x65\x71\x75\x65\x73\x74\x73\x2D\x77\x6D\x65","\x33\x30\x2D\x76\x6C\x5F\x63\x6C\x6F\x73\x75\x72\x65\x73"];var channel=_0xd3cc[0];var countryDB={BE:{name:_0xd3cc[1],webhook:{slack:_0xd3cc[2],GForm:_0xd3cc[3]},states:_0xd3cc[4],str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},LU:{name:_0xd3cc[5],webhook:{slack:_0xd3cc[2],GForm:_0xd3cc[3]},states:_0xd3cc[4],str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},NL:{name:_0xd3cc[6],webhook:{slack:_0xd3cc[7]},states:_0xd3cc[4],str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3},default:{name:_0xd3cc[8],webhook:{slack:_0xd3cc[2],GForm:_0xd3cc[3]},states:_0xd3cc[4],str_lvl:-1,pri_lvl:2,min_lvl:3,maj_lvl:4,rmp_lvl:4,fwy_lvl:5,place_lvl:3}};var languageDB={BE:{"\x66\x72":_0xd3cc[9],nl:_0xd3cc[10]},LU:{"\x66\x72":_0xd3cc[9],en:_0xd3cc[11]},NL:{"\x6E\x6C":_0xd3cc[10]}};var channelDB={BE_fr:{closure:_0xd3cc[12],editing:_0xd3cc[12]},BE_nl:{closure:_0xd3cc[13],editing:_0xd3cc[13]},LU_fr:{closure:_0xd3cc[12],editing:_0xd3cc[12]},LU_en:{closure:_0xd3cc[12],editing:_0xd3cc[12]},NL_nl:{closure:_0xd3cc[14],editing:_0xd3cc[13]}}