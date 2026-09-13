function isHex(p: string): boolean {
    for (let i = 0; i < p.length; i++) {
        const c = p[i]!;
        const isDigit = c >= '0' && c <= '9';
        const isLow = c >= 'a' && c <= 'f';
        const isHigh = c >= 'A' && c <= 'F';
        if (!isDigit && !isLow && !isHigh) return false;
    }
    return true;
}

function validateIPv4(parts: string[]): boolean {
    if (parts.length !== 4) return false;
    for (const p of parts) {
        if (p.length === 0 || p.length > 3) return false;
        if (p[0] === '0' && p.length > 1) return false;
        for (const ch of p) {
            if (ch < '0' || ch > '9') return false;
        }
        const num = Number(p);
        if (num < 0 || num > 255) return false;
    }
    return true;
}

function validateIPv6(parts: string[]): boolean {
    if (parts.length !== 8) return false;
    for (const p of parts) {
        if (p.length === 0 || p.length > 4) return false;
        if (!isHex(p)) return false;
    }
    return true;
}

function validIPAddress(queryIP: string): string {
    const hadDot = queryIP.includes('.');
    const hadColon = queryIP.includes(':');

    if (hadDot && hadColon) return "Neither";

    if (hadDot) {
        return validateIPv4(queryIP.split('.')) ? "IPv4" : "Neither";
    }

    if (hadColon) {
        return validateIPv6(queryIP.split(':')) ? "IPv6" : "Neither";
    }

    return "Neither";
}