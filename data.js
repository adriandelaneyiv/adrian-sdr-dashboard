// ============================================================
//  ADRIAN SDR DASHBOARD — DATA FILE
//  Update this file each week. Never touch index.html.
//  Last updated: Feb 23, 2026
// ============================================================

const SDR_DATA = {

  // ── CURRENT MONTH ────────────────────────────────────────
  // Update these numbers every week when you upload your CSV
  current: {
    month: "Feb 2026",
    demosBooked: 29,
    demosShown: 22,
    revSourced: 33500,
    personalRev: 11500,
    outboundRev: 64500,
    callsMade: 0,           // update when available
    pctToGoal: 55,
    pctToEOM: 74,
    showRate: 75.9,
    closeRate: 18.2,
    goal: 60000,

    // Daily demos — only worked days, no blanks
    daily: {
      dates: ['2/2','2/3','2/4','2/5','2/6','2/9','2/10','2/11','2/12','2/13','2/16','2/17','2/18','2/19','2/22','2/23'],
      demos: [2, 2, 4, 0, 3, 5, 1, 2, 3, 4, 4, 2, 2, 1, 1, 4]
    }
  },

  // ── PREVIOUS MONTH ───────────────────────────────────────
  // At month end: copy current → prev, start fresh current
  prev: {
    month: "Jan 2026",
    demosBooked: 51,
    demosShown: 37,
    totalRev: 88600,
    callsMade: 612,
    aveCalls: 38.25,
    dialsPerDemo: 12,
    pctToGoal: 62,
    showRate: 72.5,
    closeRate: 8,
    goal: 60000,

    daily: {
      dates: ['1/5','1/6','1/7','1/8','1/9','1/12','1/13','1/14','1/15','1/16','1/19','1/20','1/21','1/22','1/23','1/26'],
      calls: [2, 36, 64, 21, 10, 4, 62, 13, 14, 52, 58, 77, 83, 13, 36, 67],
      demos: [0, 4, 6, 1, 1, 0, 5, 3, 6, 3, 2, 1, 5, 3, 5, 6]
    }
  },

  // ── ALL TIME ─────────────────────────────────────────────
  // Add one new entry here at the end of each month
  allTime: {
    months:    ['Nov/Dec 2025', 'Jan 2026', 'Feb 2026 (MTD)'],
    revenue:   [66000,           88600,      64500],
    demos:     [56,              51,         29],
    calls:     [779,             612,        0],
    shows:     [30,              37,         22],
    showRates: [53.6,            72.5,       75.9]
  },

  // ── GOALS ────────────────────────────────────────────────
  goals: {
    monthlyRev: 60000,
    monthlyDemos: 49,
    annualRev: 720000
  }

};
