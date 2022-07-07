function disemvowel(str) {
    let myStr = [];
    for (var i = 0; i < str.length; i++) {
        myStr.push(str[i]);
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'
            || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'
        ) {
            myStr.pop();
        }
    }
    return myStr.join('');
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"