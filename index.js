function writeMessage(message, salutation, name) {
  return `
    ${message}\n
    ${salutation},
    ${name}
  `;
}

console.log(`
function writeMessage(message, salutation, name) {
  return \`
    \${message}\\n
    \${salutation},
    \${name}
  \`;
}

writeMessage(
  "You're doing amazing! Hopefully these exercises help you get a bit closure to your programming goals.",
  "Keep currying on",
  "Functional Programmer",
); // 👇
`);

console.log("================================\n");
console.log(
  writeMessage(
    "You're doing amazing! Hopefully these exercises help you get a bit closure to your programming goals.",
    "Keep currying on",
    "Functional Programmer",
  ),
);
console.log("\n================================\n");

const signMessageFrom = (name) => (message, salutation) =>
  writeMessage(message, salutation, name);
const writeFriendlyNote = signMessageFrom("Your best bud");

console.log(`
const signMessageFrom = (name) => (message, salutation) =>
  writeMessage(message, salutation, name);
const writeFriendlyNote = signMessageFrom("Your best bud");

writeFriendlyNote(
  "Hey Pal! Party at my place tonight, bring snacks!",
  "See ya",
); // 👇
`);

console.log("================================\n");
console.log(
  writeFriendlyNote(
    "Hey Pal! Party at my place tonight, bring snacks!",
    "See ya",
  ),
);
console.log("\n================================\n");

const signMessageWith = (salutation) => (message, name) =>
  writeMessage(message, salutation, name);
const writeBusinessMemo = signMessageWith("Best");

console.log(`
const signMessageWith = (salutation) => (message, name) =>
  writeMessage(message, salutation, name);
const writeBusinessMemo = signMessageWith("Best");

writeBusinessMemo(
  "Hi, Larry. We need to talk about your TPS reports.",
  "Bob",
); // 👇
`);

console.log("================================\n");
console.log(
  writeBusinessMemo(
    "Hi, Larry. We need to talk about your TPS reports.",
    "Bob",
  ),
);
console.log("\n================================\n");

const makeSignature = (salutation, name) => (message) =>
  writeMessage(message, salutation, name);
const writeLoveLetter = makeSignature("Thine evermore", "Harry!");

console.log(`
const makeSignature = (salutation, name) => (message) =>
  writeMessage(message, salutation, name);
const writeLoveLetter = makeSignature("Thine evermore", "Harry!");

writeLoveLetter(
  "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
); // 👇
`);

console.log("================================\n");
console.log(
  writeLoveLetter(
    "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
  ),
);
console.log("\n================================\n");

function quote(name, year, text) {
  return `
    ${text}
    - ${name} (${year})
  `;
}

console.log(`
function quote(name, year, text) {
  return \`
    \${text}
    - \${name} (\${year})
  \`;
}

quote(
  "Guido van Rossum",
  2001,
  "Don't you hate code that's not properly indented?",
);
quote(
  "Doug Crockford",
  2005,
  "There are no good texts on JavaScript programming.",
);
quote(
  "Doug Crockford",
  2008,
  "JavaScript is an astonishing language, in the very worst sense.",
);
quote(
  "Edsger Dijkstra",
  1978,
  "Object oriented programming is an exceptionally bad idea which could only have originated in California.",
);
quote(
  "Edsger Dijkstra",
  1975,
  "By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.",
);
quote(
  "Edsger Dijkstra",
  1975,
  "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer.",
); // 👇
`);

console.log("================================\n");
console.log(
  quote(
    "Guido van Rossum",
    2001,
    "Don't you hate code that's not properly indented?",
  ),
  quote(
    "Doug Crockford",
    2005,
    "There are no good texts on JavaScript programming.",
  ),
  quote(
    "Doug Crockford",
    2008,
    "JavaScript is an astonishing language, in the very worst sense.",
  ),
  quote(
    "Edsger Dijkstra",
    1978,
    "Object oriented programming is an exceptionally bad idea which could only have originated in California.",
  ),
  quote(
    "Edsger Dijkstra",
    1975,
    "By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.",
  ),
  quote(
    "Edsger Dijkstra",
    1975,
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer.",
  ),
);
console.log("\n================================\n");

const curriedQuote = (name) => (year) => (text) => quote(name, year, text);
const quoteCrockford = curriedQuote("Doug Crockford");
const quoteDijkstra = curriedQuote("Edsger Dijkstra");
const quoteDijkstra75 = quoteDijkstra(1975);

console.log(`
const curriedQuote = (name) => (year) => (text) => quote(name, year, text);
const quoteCrockford = curriedQuote("Doug Crockford");
const quoteDijkstra = curriedQuote("Edsger Dijkstra");
const quoteDijkstra75 = quoteDijkstra(1975);

curriedQuote("Guido van Rossum")(2001)(
  "Don't you hate code that's not properly indented?",
);
quoteCrockford(2005)("There are no good texts on JavaScript programming.");
quoteCrockford(2008)(
  "JavaScript is an astonishing language, in the very worst sense.",
);
quoteDijkstra(1978)(
  "Object oriented programming is an exceptionally bad idea which could only have originated in California.",
);
quoteDijkstra75(
  "By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.",
);
quoteDijkstra75(
  "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer.",
);
quoteDijkstra75(
  "The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]",
); // 👇
`);

console.log("================================\n");
console.log(
  curriedQuote("Guido van Rossum")(2001)(
    "Don't you hate code that's not properly indented?",
  ),
  quoteCrockford(2005)("There are no good texts on JavaScript programming."),
  quoteCrockford(2008)(
    "JavaScript is an astonishing language, in the very worst sense.",
  ),
  quoteDijkstra(1978)(
    "Object oriented programming is an exceptionally bad idea which could only have originated in California.",
  ),
  quoteDijkstra75(
    "By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.",
  ),
  quoteDijkstra75(
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer.",
  ),
  quoteDijkstra75(
    "The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]",
  ),
);
console.log("\n================================\n");
