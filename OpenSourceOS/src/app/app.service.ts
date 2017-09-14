import { Injectable } from '@angular/core';

@Injectable()

export class TestService {

    getInfo() {
        return [
            { "id": 1, "name": "Unix\-Like FreeBSD", "oslist": "Darwin, DragonFly BSD, FreeBSD" },
            { "id": 2, "name": "Unix\-Like NetBSD", "oslist": "Bitrig, NetBSD, OpenBSD" },
            { "id": 3, "name": "Non\-Unix\-Like", "oslist": "HelenOS, ReactOS, TempleOS" },
            { "id": 4, "name": "Unix\-Like Linux Distribution Debian based", "oslist": "Linux BBQ, Kali Linux, Ubuntu, BackTrack, Xubuntu,Lubuntu, Kubuntu, Edubuntu" },
            { "id": 5, "name": "Unix\-Like RPM Based", "oslist": "Fedora, Redhat Linux, openSUSE, Mandriva" },
            { "id": 6, "name": "Unix\-Like RPM Based Fedora based", "oslist": "CentOS, QubesOS, YellowDog Linux" },
            { "id": 7, "name": "Unix\-Like RPM Based,Independent RPM Distribution", "oslist": "Turbo Linux, Vine Linux, CalderaOpen Linux" },
            { "id": 8, "name": "Unix\-Like RPM Based Urpmi based", "oslist": "Mandriva Linux, Rosa Linux, Unity Linux" },
        ]

    }

}

