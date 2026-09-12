let queryIP: string = "";
let Arr1 = queryIP;
let splitedarr: string[] = Arr1.split('');

let hadDot = false;
let hadColon = false;

for (let i = 0; i < splitedarr.length; i++) {
    if (splitedarr[i] === '.') hadDot = true;
    if (splitedarr[i] === ':') hadColon = true;
}

function limiter(splitedarr: string[]): string {
    let hadDot = false;
    let hadColon = false;

    for (let i = 0; i < splitedarr.length; i++) {
        if (splitedarr[i] === '.') hadDot = true;
        if (splitedarr[i] === ':') hadColon = true;
    }
    let Response: string = '';
    if (hadColon == true) Response = ':';
    if (hadDot == true) Response = '.';
    if (hadColon == true && hadDot == true) Response = '*'
    return Response
}
let delimiter = limiter(splitedarr);
function mysplit(splitedarr: string[], delimiter: string): string[] {
    let part: string[] = [];
    let temp: string = '';

    for (let i = 0; i < splitedarr.length; i++) {
        if (splitedarr[i] === delimiter) {
            part.push(temp);
            temp = '';
        } else {
            temp += splitedarr[i];
        }
    }
    part.push(temp);
    return part;
}
function isHex(p: string): boolean {
    for (let c of p) {
        let isDigit = c >= '0' && c <= '9';
        let isLow = c >= 'a' && c <= 'f';
        let isHigh = c >= 'A' && c <= 'F';
        if (!isDigit && !isLow && !isHigh) return false;
    }
    return true;
}
let queryIParrP: string[] = mysplit(splitedarr, delimiter);
function validIPAddress(queryIParrP: string[]): string {
    if (queryIParrP.length === 4) {
        for (let i = 0; i < queryIParrP.length; i++) {
            let p = queryIParrP[i]!;
            if (p.length === 0 || p.length > 3) return "invalid";
            if (p[0] === '0' && p.length > 1) return "invalid";
            for (let j = 0; j < p.length; j++) {
                if (p[j]! < '0' || p[j]! > '9') {
                    return "invalid";
                };
            }
        }
         return "IPv4";
    } else if (queryIParrP.length === 8) {
        for (let i = 0; i < queryIParrP.length; i++) {
            let f = queryIParrP[i]!;
            if (f.length === 0 || f.length > 4) return "invalid";
            if (!isHex(f)) return "invalid";
        }
        return "IPv6";
    }
    return "invalid";
}