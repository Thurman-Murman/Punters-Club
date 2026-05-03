// ============================================================
// 🔧 PUNTERS CLUB CONFIG - Edit this file weekly 🔧
// ============================================================
// Tip: Use admin.html to generate this file via a form instead
// of editing by hand.
// ============================================================

const CONFIG = {

  // 📅 START DATE - The Sunday Week 1 started
  // Format: Year, Month (0-11 — January is 0), Day
  startDate: new Date(2026, 0, 11), // Sunday 11th Jan 2026

  // 💰 Total amount in the kitty (UPDATE MANUALLY)
  kitty: 4155.00,

  // 🎯 THIS WEEK'S BET (UPDATE WHEN PICKER CHOOSES)
  bet: {
    description: "7-Leg Multi: Pistons H2H (vs Magic), Cavaliers H2H (vs Raptors), Lakers H2H (vs Rockets), Lions H2H (vs Essendon), West Coast H2H (vs Richmond), Geelong H2H (vs North), St Kilda H2H (vs Carlton)",
    odds: 18.81
  },

  // Stake per week
  stake: 50,

  // Member payment status - true if paid, false if not
  members: {
    "Smitty": false,
    "Bizza": false,
    "Pukey": false,
    "Drowley": true,
    "Semp": false,
    "Perka": true,
    "Becksy": true,
    "Catta": true,
    "Robo": false,
    "Ruey": false
  },

  // Rotation order - DO NOT CHANGE ORDER (just add/remove names if needed)
  rotation: ["Smitty", "Bizza", "Pukey", "Drowley", "Semp", "Perka", "Becksy", "Catta", "Robo", "Ruey"],

  // Any notes or announcements (leave empty "" for no notes)
  notes: "$25 per week. Bank details: BSB 633-000 ACC 159785823",

  // 📜 PAST BETS HISTORY (Add each week's result here)
  // Format: { bet: "description", odds: 1.90, result: "win" | "loss" | "pending" }
  // Week 1 = index 0, Week 2 = index 1, etc.
  pastBets: [
    { bet: "Gold Coast - Wymark Place", odds: 2.88, result: "loss" },
    { bet: "4-Leg Place Multi: Oak Hill (Caulfield R7), Yes I Know (Caulfield R10), How Much Better (Newcastle R6), Whinchat (Randwick R8)", odds: 3.15, result: "loss" },
    { bet: "6-Leg SGM: Lakers @ Wizards - Doncic 25+ Pts, LeBron 20+ Pts, Lakers Win, Doncic 4+ Reb, Ayton 4+ Reb, LeBron 4+ Ast", odds: 2.66, result: "win" },
    { bet: "3-Leg Win Multi: Guest House (Caulfield R3), Autumn Break (Randwick R2), Tempted (Randwick R8)", odds: 6.65, result: "loss" },
    { bet: "5-Leg Win Multi: Immortal Star (Flemington R4), Apocalyptic (Randwick R6), Sabaj (Flemington R7), Tentyris (Flemington R8), Autumn Glow (Randwick R8)", odds: 36.98, result: "loss" },
    { bet: "3-Leg Place Multi: Along The River (Caulfield R1), Yabby Pump (Rosehill R1), Shezain (Rosehill R2)", odds: 26.49, result: "loss" },
    { bet: "13-Leg DC Multi: Brentford W/D, Liverpool W/D, Newcastle W/D, Man City W/D, Como W/D, Napoli W/D, Inter W/D, Barcelona Win, Atletico W/D, Leverkusen W/D, Hoffenheim W/D, Werder Bremen W/D, Bayern W/D", odds: 7.88, result: "loss" },
    { bet: "Drumfire Win (Muswellbrook R2)", odds: 4.80, result: "win" },
    { bet: "6-Leg Multi: Buckaroo PLC (Caulfield R8), Pembrey Win (Rosehill R3), Central Europe Win (Rosehill R4), Sixties Win (Rosehill R7), Lazzura PLC (Rosehill R8), Never Ordinary Win (Morphettville R1)", odds: 23.03, result: "loss" },
    { bet: "2-Leg Multi: Immortal Star PLC (Caulfield R1), St Kilda H2H (vs GWS Giants)", odds: 4.65, result: "win" },
    { bet: "3-Leg Win Multi: Litzdeel (Flemington R7), Barnavara (Rosehill R2), Aeliana (Rosehill R8)", odds: 6.50, result: "loss" },
    { bet: "3-Leg Multi: Joliestar PLC (Randwick R7), Sheza Alibi Win (Randwick R8), Here To Shock PLC (Caulfield R9)", odds: 5.60, result: "loss" },
    { bet: "8-Leg Multi: Lions H2H (vs North), Melbourne H2H (vs Essendon), Hawthorn +32.5 (vs Bulldogs), Geelong SGM (Cats H2H, Holmes 25+ Disp, Smith 25+ Disp), GWS H2H (vs Richmond), St Kilda H2H (vs Port)", odds: 4.65, result: "loss" },
    { bet: "4-Leg Multi: Plaintiff Win (Randwick R4), Angel Capital PLC (Randwick R9), Balance The Books Win (Eagle Farm R2), Olympian PLC (Randwick R5)", odds: 9.50, result: "loss" },
    { bet: "5-Leg Multi: Mcwoody Win (Morphettville R3), Silvasista Win (Flemington R6), Geelong H2H (vs Port), Fremantle H2H (vs Carlton), St Kilda H2H (vs West Coast)", odds: 10.59, result: "loss" }
  ],

  // Last updated date (for your reference)
  lastUpdated: "17 Jan 2026"
};
