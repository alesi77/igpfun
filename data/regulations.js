// ─────────────────────────────────────────────
//  REGULATIONS
//  Each section has a unique id, a title and a list of articles.
//  The article body (body) accepts HTML.
// ─────────────────────────────────────────────
const REGULATIONS_DATA = {
  version: "1.2",
  updated: "JANUARY 15, 2025",
  sections: [
    {
      id: "gen",
      title: "General Provisions",
      articles: [
        {
          num: "ART. 1",
          title: "About the League",
          body: `<p>IGPFun is an amateur sim racing league dedicated to the Super Formula Light category on the iRacing platform. The league aims to provide a competitive, respectful and enjoyable environment for all virtual motorsport enthusiasts.</p>
                 <p>Participation in the league implies full acceptance of these regulations and any subsequent amendments.</p>`
        },
        {
          num: "ART. 2",
          title: "Administration",
          body: `<p>The league is managed by a team of administrators who organise races, publish results, handle communications and enforce the regulations. All administrator decisions are binding and final, subject to the right of appeal set out in Art. 14.</p>`
        },
        {
          num: "ART. 3",
          title: "Platform & Vehicle",
          body: `<p>All league activity takes place exclusively on <strong>iRacing</strong>. The official vehicle for the 2025 season is the <strong>Super Formula Light</strong>. No vehicle setup modifications beyond those permitted by the iRacing platform are allowed.</p>`
        }
      ]
    },
    {
      id: "iscr",
      title: "Registration",
      articles: [
        {
          num: "ART. 4",
          title: "Eligibility",
          body: `<p>Any driver with an active iRacing account may participate in the league. There are no iRating or Safety Rating restrictions, however drivers are expected to maintain a standard of driving consistent with the competitive and fair play spirit of the league.</p>
                 <p>Every driver must be a member of the official league Discord server and keep notifications active for the #announcements channel.</p>`
        },
        {
          num: "ART. 5",
          title: "Race Number",
          body: `<p>Each driver will select a unique race number upon registration. The number is reserved for the entire season. In the event of a conflict, priority is given to the driver who completed registration first.</p>`
        }
      ]
    },
    {
      id: "format",
      title: "Race Format",
      articles: [
        {
          num: "ART. 6",
          title: "Weekend Structure",
          body: `<p>Each league event takes place in a single evening session with the following format:</p>
                 <table class="rule-table">
                   <thead><tr><th>Session</th><th>Duration</th><th>Notes</th></tr></thead>
                   <tbody>
                     <tr><td>Free Practice</td><td>20 min</td><td>Open to all drivers</td></tr>
                     <tr><td>Qualifying</td><td>15 min (Q1/Q2 from R5)</td><td>Flying lap format</td></tr>
                     <tr><td>Race</td><td>~40 min</td><td>Fixed distance per circuit</td></tr>
                   </tbody>
                 </table>`
        },
        {
          num: "ART. 7",
          title: "Race Start",
          body: `<p>The race begins with a Rolling Start behind iRacing's virtual safety car. Overtaking before the designated start line is prohibited. Jump starts will be penalised with a drive-through penalty.</p>`
        },
        {
          num: "ART. 8",
          title: "Safety Car & Flags",
          body: `<p>All iRacing virtual flags must be respected. Under a virtual safety car, all drivers must hold their position and must not overtake. Violations will be sanctioned by the stewards.</p>`
        }
      ]
    },
    {
      id: "punti",
      title: "Points System",
      articles: [
        {
          num: "ART. 9",
          title: "Points Allocation",
          body: `<table class="rule-table">
                   <thead><tr><th>Position</th><th>Points</th></tr></thead>
                   <tbody>
                     <tr><td>1st Place</td><td>25</td></tr>
                     <tr><td>2nd Place</td><td>18</td></tr>
                     <tr><td>3rd Place</td><td>15</td></tr>
                     <tr><td>4th Place</td><td>12</td></tr>
                     <tr><td>5th Place</td><td>10</td></tr>
                     <tr><td>6th Place</td><td>8</td></tr>
                     <tr><td>7th Place</td><td>6</td></tr>
                     <tr><td>8th Place</td><td>4</td></tr>
                     <tr><td>9th Place</td><td>2</td></tr>
                     <tr><td>10th Place</td><td>1</td></tr>
                     <tr><td>Fastest Lap (top 10 only)</td><td>+1</td></tr>
                   </tbody>
                 </table>`
        },
        {
          num: "ART. 10",
          title: "Drop Score",
          body: `<p>From Round 7 onwards, each driver may drop their single worst result from the final championship standings. This rule ensures that one isolated incident cannot compromise an entire season.</p>`
        }
      ]
    },
    {
      id: "condotta",
      title: "Code of Conduct",
      articles: [
        {
          num: "ART. 11",
          title: "Fair Play",
          body: `<p>Every driver is expected to race with respect for their opponents. Deliberate contact, intentional blocking, and unsportsmanlike behaviour — both on track and on the Discord server — are strictly prohibited.</p>
                 <p>The spirit of the league is to replicate professional motorsport competition: hard but fair racing on track, mutual respect off it.</p>`
        },
        {
          num: "ART. 12",
          title: "Disconnections",
          body: `<p>In the event of an involuntary disconnection during the race, the driver may rejoin the session retaining their last known position. No position or points compensation will be awarded for technical issues.</p>`
        }
      ]
    },
    {
      id: "penalita",
      title: "Penalties",
      articles: [
        {
          num: "ART. 13",
          title: "Penalty Scale",
          body: `<table class="rule-table">
                   <thead><tr><th>Infringement</th><th>Penalty</th></tr></thead>
                   <tbody>
                     <tr><td>Corner cutting with advantage gained</td><td>5s time penalty</td></tr>
                     <tr><td>Jump start</td><td>Drive-through</td></tr>
                     <tr><td>Involuntary contact</td><td>Warning / 10s penalty</td></tr>
                     <tr><td>Deliberate contact</td><td>DSQ + 1 race ban</td></tr>
                     <tr><td>Unsportsmanlike behaviour</td><td>Warning / Suspension</td></tr>
                     <tr><td>Repeat offence</td><td>Suspension / Expulsion</td></tr>
                   </tbody>
                 </table>`
        }
      ]
    },
    {
      id: "proteste",
      title: "Protests & Appeals",
      articles: [
        {
          num: "ART. 14",
          title: "Protest Procedure",
          body: `<p>Every driver has the right to submit a protest within <strong>24 hours</strong> of the end of the race. Protests must be submitted through the #protests channel on the Discord server and must include:</p>
                 <p>1. Race number and name of the driver involved<br>
                    2. Lap number and corner of the incident<br>
                    3. Video footage or screenshots of the incident<br>
                    4. A written description of what occurred</p>
                 <p>The stewards panel will issue a decision within 48 hours. The decision is final unless new evidence is presented.</p>`
        }
      ]
    }
  ]
};
