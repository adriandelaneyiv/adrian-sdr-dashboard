// ============================================================
//  ADRIAN SDR DASHBOARD — DATA FILE
//  Update this file each week. Never touch index.html.
//  Last updated: Feb 28, 2026
// ============================================================

const SDR_DATA = {

  // ── CURRENT MONTH ────────────────────────────────────────
  current: {
    month: "Mar 2026",
    demosBooked: 0,
    demosShown: 0,
    revSourced: 0,
    personalRev: 0,
    outboundRev: 0,
    pctToGoal: 0,
    pctToEOM: 0,
    showRate: 0,
    closeRate: 0,
    goal: 60000,
    daily: {
      dates: [],
      demos: []
    }
  },

  // ── PREVIOUS MONTH ───────────────────────────────────────
  prev: {
    month: "Feb 2026",
    demosBooked: 42,
    demosShown: 29,
    totalRev: 84000,
    personalRev: 19000,
    revSourced: 45500,
    outboundRev: 84000,
    callsMade: 0,
    dialsPerDemo: 0,
    pctToGoal: 72.5,
    showRate: 69,
    closeRate: 20.7,
    goal: 60000,
    daily: {
      dates: ['2/2','2/3','2/4','2/5','2/6','2/9','2/10','2/11','2/12','2/13','2/16','2/17','2/18','2/19','2/22','2/23','2/24','2/25'],
      calls: [],
      demos: [2, 2, 4, 0, 3, 5, 1, 2, 3, 4, 4, 2, 2, 1, 1, 4, 3, 2]
    }
  },

  // ── HISTORY — add one entry per completed month ───────────
  history: [
    {
      month: "Jan 2026",
      demosBooked: 51,
      demosShown: 37,
      totalRev: 88600,
      personalRev: 9500,
      outboundRev: 88600,
      showRate: 72.5,
      closeRate: 8,
      dialsPerDemo: 12,
    },
    {
      month: "Feb 2026",
      demosBooked: 42,
      demosShown: 29,
      totalRev: 84000,
      personalRev: 20500,
      outboundRev: 84000,
      showRate: 69,
      closeRate: 20.7,
      dialsPerDemo: 0,
    }
  ],

  // ── ALL TIME ─────────────────────────────────────────────
  // Add a new entry at end of each month
  allTime: {
    months:    ['Jan 2026', 'Feb 2026', 'Mar 2026 (MTD)'],
    revenue:   [88600,       84000,      0],
    demos:     [51,          42,         0],
    showRates: [72.5,        69,         0]
  },

  // ── GOALS ────────────────────────────────────────────────
  goals: {
    monthlyRev: 60000,
    monthlyDemos: 49,
    monthlyShows: 40,
    annualRev: 720000
  }

};
