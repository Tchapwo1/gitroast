export const PUNCHLINES = {
  high_issues: [
    (count) => `You have ${count} open issues. That is not an issue tracker; that is a memorial garden of abandoned developer dreams.`,
    (count) => `${count} open issues? At this point, the bugs have unionized and are demanding healthcare benefits.`,
    (count) => `Your issues tab has ${count} tickets aging like fine milk in a hot server room.`,
  ],
  lazy_commits: [
    (msg) => `Recent commit: "${msg}". Truly inspiring engineering. Shakespeare could never capture that depth of human suffering.`,
    (msg) => `"${msg}" — an artistic masterpiece of a commit message written by someone clearly crying at 3:14 AM.`,
    (msg) => `Who wrote "${msg}"? Because that looks like a cry for help disguised as git history.`,
  ],
  zero_stars: [
    () => `This repository has fewer stars than a cloudy night in London. Even your mom didn't star this.`,
    () => `Zero stars detected. The only person browsing this codebase is me, and I was forced here by a CLI command.`,
  ],
  massive_stars: [
    (stars) => `${stars.toLocaleString()} stars! Look at you, Mr. Open Source Celebrity. Still haven't fixed those memory leaks though, have you?`,
    (stars) => `${stars.toLocaleString()} stars, but your README hasn't been updated since people thought NFTs were a good retirement plan.`,
  ],
  no_license: [
    () => `No open-source license detected. Legally speaking, you're a copyright pirate in a hoodie.`,
    () => `Zero license file. That means nobody can legally use this, which is probably a blessing in disguise.`,
  ],
  general_burns: [
    () => `Your dependency tree has its own gravitational field. Light cannot escape this node_modules folder.`,
    () => `This codebase has a bus factor of 1: if the sole author drinks bad milk, the entire company collapses.`,
    () => `Code written with 100% pure optimism and 0% unit testing. Living life on the absolute edge.`,
    () => `Found functions longer than War & Peace with more nested IF statements than an existential crisis.`,
  ],
};
