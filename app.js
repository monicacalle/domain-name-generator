let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let suffix = [".com", ".co", ".es"];

for (p = 0; p < pronoun.length; p++) {
  for (a = 0; a < adj.length; a++) {
    for (n = 0; n < noun.length; n++) {
      for (s = 0; s < suffix.length; s++) {
        console.log(pronoun[p] + adj[a] + noun[n] + suffix[s]);
      }
    }
  }
}
