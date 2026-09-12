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
let queryIParrP: string[] = mysplit(splitedarr, delimiter);
function validIPAddress(queryIParrP: string[]): string {
    if(queryIParrP.length === 4)
    return "invalid";
}