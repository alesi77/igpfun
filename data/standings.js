// ─────────────────────────────────────────────
//  DRIVER STANDINGS
//  lastRound: last completed round (num + circuit name)
//  rounds:    list of rounds shown in the results table
//  drivers:   sorted by championship position
//  results:   points per round  →  key = round number
//             use "25+1" for win + fastest lap, "—" if did not race, "DNF" if retired
// ─────────────────────────────────────────────
const STANDINGS_DATA = {
  lastRound: { num: 4, name: "Suzuka Circuit" },
  rounds: [
    { num: 1, short: "R1 Fuji"   },
    { num: 2, short: "R2 Imola"  },
    { num: 3, short: "R3 Monza"  },
    { num: 4, short: "R4 Suzuka" }
  ],
  drivers: [
    { pos: 1, number: 1,  name: "Marco Rossi",     flag: "🇮🇹", country: "Italy",   races: 4, wins: 2, podiums: 4, points: 101, results: { 1: "25",   2: "18", 3: "18",   4: "25+1" } },
    { pos: 2, number: 7,  name: "Luca Bianchi",    flag: "🇮🇹", country: "Italy",   races: 4, wins: 1, podiums: 3, points: 83,  results: { 1: "18",   2: "25", 3: "15",   4: "18"   } },
    { pos: 3, number: 14, name: "Andrea Esposito", flag: "🇮🇹", country: "Italy",   races: 4, wins: 1, podiums: 3, points: 79,  results: { 1: "15",   2: "15", 3: "25+1", 4: "15"   } },
    { pos: 4, number: 22, name: "Davide Ferrari",  flag: "🇮🇹", country: "Italy",   races: 4, wins: 0, podiums: 1, points: 61,  results: { 1: "12",   2: "12", 3: "12",   4: "12"   } },
    { pos: 5, number: 5,  name: "Stefano Ricci",   flag: "🇮🇹", country: "Italy",   races: 4, wins: 0, podiums: 0, points: 54,  results: { 1: "10",   2: "10", 3: "10",   4: "10"   } },
    { pos: 6, number: 33, name: "Giovanni Conti",  flag: "🇮🇹", country: "Italy",   races: 4, wins: 0, podiums: 0, points: 47,  results: { 1: "8",    2: "8",  3: "8",    4: "8"    } },
    { pos: 7, number: 9,  name: "Paolo Martini",   flag: "🇮🇹", country: "Italy",   races: 4, wins: 0, podiums: 0, points: 39,  results: { 1: "6",    2: "6",  3: "6",    4: "6"    } },
    { pos: 8, number: 18, name: "Roberto Greco",   flag: "🇮🇹", country: "Italy",   races: 3, wins: 0, podiums: 0, points: 28,  results: { 1: "—",    2: "4",  3: "6",    4: "4"    } }
  ]
};
