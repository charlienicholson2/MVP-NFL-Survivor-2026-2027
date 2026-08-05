/**
 * SURVIVOR CHALLENGE CONFIG
 * ---------------------------------------------------------
 * 1. In Google Sheets: File > Share > Publish to web
 *    - Select the specific sheet/tab that holds your pick data
 *    - Choose "Comma-separated values (.csv)"
 *    - Click Publish, then copy the URL it gives you
 * 2. Paste that URL below as SHEET_CSV_URL.
 *
 * Expected columns in your sheet (exact header names, any order):
 *   Week        -> e.g. 1, 2, 3...
 *   Name         -> MVP's name (used only to enforce no-repeat picks, never displayed)
 *   QB Pick      -> e.g. "Josh Allen"
 *   Result       -> "Survived" / "Eliminated" / "Pending" (optional)
 *
 * If SHEET_CSV_URL is left blank, the site falls back to the sample
 * data in data/sample-weeks.json so you can preview the layout.
 */
window.SURVIVOR_CONFIG = {
  SHEET_CSV_URL: "",

  // The combined TD threshold QBs need to hit to survive (passing + rushing + receiving)
  TD_THRESHOLD: 1.5,

  // Season framing shown in the hero
  SEASON_LABEL: "2026 Season",

  // Total number of MVPs competing this season. The "Still Alive" stat is this
  // number minus everyone eliminated so far — set it once at kickoff. If left
  // blank, the site falls back to counting just this week's entries instead.
  TOTAL_MVPS: null,

  // Optional: ISO datetime string for when this week's picks lock (kickoff).
  // Leave blank to hide the countdown.
  NEXT_LOCK_ISO: "",
};
