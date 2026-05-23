// ─────────────────────────────────────────────
//  RACE CALENDAR
//  status:  "completed" | "next" | "upcoming"
//  winner:  winner name or null
//  finale:  true  →  shows "Grand Final" instead of TBD
//
//  briefing.trackMap: path to the track map image
//    → place your image files in the  images/tracks/  folder
//    → recommended format: PNG or JPG, 800–1200px wide
//    → if the image is missing, a placeholder is shown automatically
// ─────────────────────────────────────────────
const CALENDAR_DATA = [
  {
    round: 1, flag: "🇯🇵", track: "Fuji Speedway", location: "Japan",
    date: "14 DEC 2024", time: "21:00 CET", status: "completed", winner: "M. Rossi", finale: false,
    briefing: {
      laps: 25, duration: "~40 min",
      fuelPerLap: "3.0 L / lap", fuelTotal: "Recommended fill: 78 L",
      trackMap: "images/tracks/fuji.png"
    }
  },
  {
    round: 2, flag: "🇮🇹", track: "Autodromo Enzo e Dino Ferrari", location: "Imola, Italy",
    date: "21 DEC 2024", time: "21:00 CET", status: "completed", winner: "L. Bianchi", finale: false,
    briefing: {
      laps: 22, duration: "~40 min",
      fuelPerLap: "3.2 L / lap", fuelTotal: "Recommended fill: 72 L",
      trackMap: "images/tracks/Imola_gp.png"
    }
  },
  {
    round: 3, flag: "🇮🇹", track: "Autodromo Nazionale Monza", location: "Monza, Italy",
    date: "4 JAN 2025", time: "21:00 CET", status: "completed", winner: "A. Esposito", finale: false,
    briefing: {
      laps: 20, duration: "~38 min",
      fuelPerLap: "2.8 L / lap", fuelTotal: "Recommended fill: 58 L",
      trackMap: "images/tracks/monza.png"
    }
  },
  {
    round: 4, flag: "🇯🇵", track: "Suzuka Circuit", location: "Japan",
    date: "18 JAN 2025", time: "21:00 CET", status: "completed", winner: "M. Black", finale: false,
    briefing: {
      laps: 18, duration: "~40 min",
      fuelPerLap: "3.3 L / lap", fuelTotal: "Recommended fill: 62 L",
      trackMap: "images/tracks/suzuka.png"
    }
  },
  {
    round: 5, flag: "🇧🇪", track: "Circuit de Spa-Francorchamps", location: "Belgium",
    date: "26 JAN 2025", time: "21:00 CET", status: "next", winner: null, finale: false,
    briefing: {
      laps: 15, duration: "~42 min",
      fuelPerLap: "3.8 L / lap", fuelTotal: "Recommended fill: 60 L",
      trackMap: "images/tracks/spa.png"
    }
  },
  {
    round: 6, flag: "🇺🇸", track: "Road Atlanta", location: "Georgia, USA",
    date: "8 FEB 2025", time: "21:00 CET", status: "upcoming", winner: null, finale: false,
    briefing: {
      laps: 28, duration: "~40 min",
      fuelPerLap: "3.0 L / lap", fuelTotal: "Recommended fill: 88 L",
      trackMap: "images/tracks/road-atlanta.png"
    }
  },
  {
    round: 7, flag: "🇩🇪", track: "Nürburgring", location: "Germany",
    date: "22 FEB 2025", time: "21:00 CET", status: "upcoming", winner: null, finale: false,
    briefing: {
      laps: 22, duration: "~41 min",
      fuelPerLap: "3.2 L / lap", fuelTotal: "Recommended fill: 73 L",
      trackMap: "images/tracks/nurburgring.png"
    }
  },
  {
    round: 8, flag: "🇬🇧", track: "Silverstone Circuit", location: "Great Britain",
    date: "8 MAR 2025", time: "21:00 CET", status: "upcoming", winner: null, finale: false,
    briefing: {
      laps: 20, duration: "~40 min",
      fuelPerLap: "3.0 L / lap", fuelTotal: "Recommended fill: 62 L",
      trackMap: "images/tracks/silverstone.png"
    }
  },
  {
    round: 9, flag: "🇦🇺", track: "Mount Panorama", location: "Bathurst, Australia",
    date: "22 MAR 2025", time: "21:00 CET", status: "upcoming", winner: null, finale: false,
    briefing: {
      laps: 18, duration: "~42 min",
      fuelPerLap: "3.5 L / lap", fuelTotal: "Recommended fill: 65 L",
      trackMap: "images/tracks/mount-panorama.png"
    }
  },

  {
    round: 10, flag: "🇦🇺", track: "Mount Panorama2", location: "Bathurst, Australia",
    date: "23 MAR 2025", time: "21:00 CET", status: "upcoming", winner: null, finale: false,
    briefing: {
      laps: 18, duration: "~42 min",
      fuelPerLap: "3.5 L / lap", fuelTotal: "Recommended fill: 65 L",
      trackMap: "images/tracks/mount-panorama.png"
    }
  },  
{
    round: 11, flag: "🇯🇵", track: "Autopolis", location: "Japan",
    date: "5 APR 2025", time: "21:00 CET", status: "upcoming", winner: null, finale: true,
    briefing: {
      laps: 24, duration: "~40 min",
      fuelPerLap: "3.1 L / lap", fuelTotal: "Recommended fill: 77 L",
      trackMap: "images/tracks/autopolis.png"
    }
  }
];
