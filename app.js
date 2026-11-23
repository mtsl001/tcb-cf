/* =====================================================================
   THE CONVEX BRIEF — APPLICATION ENGINE & 15-SLIDE DECK REGISTRY
   ===================================================================== */

const ISSUE_URL = 'https://theconvexbrief.in/#issue-01';
const BRAND_SVG = '<svg viewBox="0 0 30 18" aria-hidden="true"><path d="M3 14 Q15 0 27 14" fill="none" stroke="#E5A93C" stroke-width="3.5" stroke-linecap="round"/></svg>';

/* ---------------------------------------------------------------------
   1. ALL 15 RE-THEMED SLIDES (OBSIDIAN & BRASS)
   --------------------------------------------------------------------- */
const SLIDES_DATA = [
  // PART I (01 - 08)
  {
    part: 'part1',
    tag: 'PART I • 01/08',
    tagClass: '',
    kicker: 'FIG 1.1 — FORENSIC SUPPLY-CHAIN DISPATCH',
    kickerClass: '',
    title: 'Is India Repeating Its Smartphone Mistake with EVs?',
    lead: 'Every domestic EV launch triggers applause over panoramic sunroofs and curved OLED screens. Almost nobody looks <strong>under the floorboard</strong>—at who controls the electro-chemical core:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="EV X-ray showing local cabin shell versus imported Chinese battery cells making up 40% of vehicle cost.">
      <rect x="20" y="8" width="280" height="18" rx="3" fill="#1A2130" stroke="#334155" stroke-width="1"/>
      <text x="160" y="17" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="8" fill="#CBD5E1">VISIBLE SURFACE: LOCAL SHEET METAL, SEATS &amp; INFOTAINMENT</text>
      <path d="M42 78 L80 40 L215 40 L262 78 L292 78 L292 108 L28 108 L28 78 Z" fill="#131924" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4,3"/>
      <circle cx="78" cy="112" r="16" fill="#1E293B" stroke="#94A3B8" stroke-width="1.5"/>
      <circle cx="242" cy="112" r="16" fill="#1E293B" stroke="#94A3B8" stroke-width="1.5"/>
      <rect x="68" y="90" width="184" height="22" rx="3" fill="#F43F5E"/>
      <text x="160" y="101" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.6" fill="#FFFFFF">IMPORTED CELL CORE (40% OF BOM)</text>
      <line x1="160" y1="112" x2="160" y2="130" stroke="#E5A93C" stroke-width="1.5"/>
      <rect x="35" y="130" width="250" height="22" rx="3" fill="#1E293B" stroke="#E5A93C" stroke-width="1"/>
      <text x="160" y="141" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.5" fill="#E5A93C">PRICING POWER: SHENZHEN &amp; NINGDE FOUNDRIES</text>
    </svg>`,
    ledger: [
      { head: 'THE SHOWROOM ILLUSION', headClass: 'coral', body: 'OEMs localize low-margin stampings, glass, wiring harnesses, and cabin UI while importing <strong>100% of lithium-ion cells</strong> from China.' },
      { head: 'THE MARGIN REALITY', headClass: 'sky', body: 'When your competitor supplies your most expensive component, you hold <strong>zero pricing power</strong> during a market price war.' }
    ],
    calloutLabel: 'CORE THESIS //',
    calloutClass: '',
    calloutText: 'Confusing screwdriver pack assembly with technological sovereignty is a balance-sheet trap. Look beneath the sheet metal.',
    ref: 'REF: ISSUE_01 // EV_VALUE_CHAIN',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part1',
    tag: 'PART I • 02/08',
    tagClass: '',
    kicker: 'FIG 1.2 — HISTORICAL INDUSTRIAL PARALLEL',
    kickerClass: '',
    title: 'We’ve Seen This Movie Before in Smartphones',
    lead: 'In 2014, Indian handset brands controlled over 40% of the domestic market by importing Shenzhen SKD kits, stamping a local logo on the plastic back, and calling it a <strong>manufacturing revolution</strong>:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Comparison between 2014 Indian smartphones and 2026 Indian EVs showing identical dependence on Chinese core components.">
      <rect x="12" y="10" width="140" height="142" rx="4" fill="#131924" stroke="#334155" stroke-width="1.2"/>
      <rect x="12" y="10" width="140" height="22" rx="4" fill="#1E293B"/>
      <text x="82" y="21" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.5" fill="#F1F5F9">2014: INDIAN HANDSETS</text>
      <rect x="24" y="40" width="116" height="24" rx="3" fill="#1E293B" stroke="#475569"/>
      <text x="82" y="52" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="8" fill="#CBD5E1">LOCAL BOX &amp; MARKETING</text>
      <rect x="24" y="70" width="116" height="46" rx="3" fill="#F43F5E"/>
      <text x="82" y="86" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.3" fill="#FFFFFF">IMPORTED SoC CHIP,</text>
      <text x="82" y="100" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFFFFF">DISPLAY &amp; PCB (CHINA)</text>
      <text x="82" y="134" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#FB7185">WIPED OUT IN 36 MONTHS</text>

      <rect x="168" y="10" width="140" height="142" rx="4" fill="#131924" stroke="#334155" stroke-width="1.2"/>
      <rect x="168" y="10" width="140" height="22" rx="4" fill="#0369A1"/>
      <text x="238" y="21" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.5" fill="#FFFFFF">2026: INDIAN EVs</text>
      <rect x="180" y="40" width="116" height="24" rx="3" fill="#1E293B" stroke="#475569"/>
      <text x="238" y="52" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="8" fill="#CBD5E1">LOCAL CHASSIS &amp; CABIN</text>
      <rect x="180" y="70" width="116" height="46" rx="3" fill="#F43F5E"/>
      <text x="238" y="86" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.3" fill="#FFFFFF">IMPORTED LFP CELLS,</text>
      <text x="238" y="100" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFFFFF">CATHODE &amp; FOIL (CHINA)</text>
      <text x="238" y="134" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#E5A93C">STRUCTURAL MARGIN TRAP</text>
    </svg>`,
    ledger: [
      { head: '2014–2017 HANDSET WIPEOUT', headClass: 'coral', body: 'The moment Chinese OEMs entered India directly with <strong>next-gen 4G silicon</strong>, domestic assemblers lost 90% of their market share inside 3 years.' },
      { head: '2026 EV VULNERABILITY', headClass: 'sky', body: 'Stamping sheet metal while importing the <strong>electro-chemical engine</strong> leaves Indian automakers exposed to the exact same supplier squeeze.' }
    ],
    calloutLabel: 'HISTORICAL LESSON //',
    calloutClass: '',
    calloutText: 'When your supplier owns the core technology, you are not a manufacturer—you are their temporary distribution channel.',
    ref: 'REF: ISSUE_01 // SKD_TRAP',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part1',
    tag: 'PART I • 03/08',
    tagClass: '',
    kicker: 'FIG 1.3 — VEHICLE BILL OF MATERIALS (BOM) AUDIT',
    kickerClass: '',
    title: 'In an EV, One Component Eats 40% of the Car',
    lead: 'In internal combustion cars, Indian OEMs spent four decades localizing cast-iron engine blocks, transmissions, and forgings. In an electric car, the value pool shifts to <strong>electro-chemistry</strong>:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="EV Bill of Materials split: 40% Battery Pack, 20% E-Drive and SiC Inverter, 40% Chassis and Interior.">
      <text x="12" y="16" font-weight="700" font-size="8.5" fill="#CBD5E1">FULL VEHICLE BOM VALUE DISTRIBUTION (100%)</text>
      <rect x="12" y="25" width="120" height="44" fill="#F43F5E" stroke="#0B0E14" stroke-width="1.5"/>
      <text x="72" y="42" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="12" fill="#FFFFFF">~40%</text>
      <text x="72" y="56" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.8" fill="#FFFFFF">BATTERY PACK</text>

      <rect x="132" y="25" width="64" height="44" fill="#0284C7" stroke="#0B0E14" stroke-width="1.5"/>
      <text x="164" y="42" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="11" fill="#FFFFFF">~20%</text>
      <text x="164" y="56" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.3" fill="#FFFFFF">E-AXLE / SiC</text>

      <rect x="196" y="25" width="112" height="44" fill="#334155" stroke="#0B0E14" stroke-width="1.5"/>
      <text x="252" y="42" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="11" fill="#F1F5F9">~40%</text>
      <text x="252" y="56" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.5" fill="#CBD5E1">BODY &amp; INTERIOR</text>

      <path d="M72 69 V92" fill="none" stroke="#E5A93C" stroke-width="1.5"/>
      <rect x="12" y="92" width="296" height="58" rx="4" fill="#1A2130" stroke="#334155" stroke-width="1.2"/>
      <rect x="12" y="92" width="225" height="58" rx="4" fill="rgba(244,63,94,0.18)" stroke="#F43F5E" stroke-width="1.2"/>
      <text x="124" y="114" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9.2" fill="#FDA4AF">75%–80% OF PACK = IMPORTED CELLS</text>
      <text x="124" y="131" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="8" fill="#E2E8F0">Cathode + Anode + Separator + Electrolyte</text>
      <text x="272" y="114" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.8" fill="#38BDF8">20%–25%</text>
      <text x="272" y="131" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="7.5" fill="#CBD5E1">Local Tray</text>
    </svg>`,
    ledger: [
      { head: 'IMPORTED VALUE (30%–32%)', headClass: 'coral', body: 'The cell itself represents <strong>75%–80% of pack cost</strong> (~32% of total car value). Every rupee of cell margin flows straight to Ningde or Shenzhen.' },
      { head: 'LOCALIZED VALUE (8%–10%)', headClass: 'sky', body: 'Indian pack assembly captures only the <strong>outer aluminum tray</strong>, copper busbars, thermal paste, and basic BMS wiring harness.' }
    ],
    calloutLabel: 'BOM VERDICT //',
    calloutClass: '',
    calloutText: 'Claiming "80% localization" by counting tires, seats, and steel while importing cells surrenders the primary profit pool abroad.',
    ref: 'REF: ISSUE_01 // BOM_CONCENTRATION',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part1',
    tag: 'PART I • 04/08',
    tagClass: '',
    kicker: 'FIG 1.4 — CAPITAL ALLOCATION & TIME-TO-MARKET',
    kickerClass: '',
    title: 'Why Indian OEMs Chose Assembly First',
    lead: 'To be fair to Tata, Mahindra, and MG: no rational CFO could wait 5 years and burn <strong class="sky-hl">₹5,000 Cr on a chemical foundry</strong> before selling their very first electric SUV:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Flowchart comparing Route A Pack Assembly at 50 to 150 Crore versus Route B Cell Foundry at 3500 to 5000 Crore.">
      <rect x="10" y="12" width="300" height="62" rx="4" fill="#131924" stroke="#334155" stroke-width="1.2"/>
      <rect x="10" y="12" width="88" height="62" rx="4" fill="#0284C7"/>
      <text x="54" y="36" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9" fill="#FFFFFF">ROUTE A</text>
      <text x="54" y="51" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#E0F2FE">₹50–150 CR</text>
      <text x="110" y="32" dominant-baseline="central" font-weight="700" font-size="8.8" fill="#F1F5F9">LOCAL PACK ASSEMBLY LINE (12–18 MOS)</text>
      <text x="110" y="50" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">Import Prismatic/Blade cells → Laser-weld busbars</text>
      <text x="110" y="62" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">→ Add liquid-cooling plate → Pass AIS-156 safety</text>

      <rect x="10" y="88" width="300" height="62" rx="4" fill="#131924" stroke="#334155" stroke-width="1.2"/>
      <rect x="10" y="88" width="88" height="62" rx="4" fill="#F43F5E"/>
      <text x="54" y="112" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9" fill="#FFFFFF">ROUTE B</text>
      <text x="54" y="127" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFE4E6">₹3,500–5,000 CR</text>
      <text x="110" y="108" dominant-baseline="central" font-weight="700" font-size="8.8" fill="#F1F5F9">5 GWh CELL FOUNDRY (4–5 YRS GESTATION)</text>
      <text x="110" y="126" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">Slurry mixing → -50°C dry-room coating → Formation</text>
      <text x="110" y="138" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">cycling → High scrap risk before 100k cars/yr</text>
    </svg>`,
    ledger: [
      { head: 'WHY ROUTE A WORKED IN 2021', headClass: 'sky', body: 'Allowed Indian brands to launch competitive EVs with <strong>30x lower upfront CAPEX</strong> while domestic EV volumes were still below 2% penetration.' },
      { head: 'WHY IT FAILS IN 2026', headClass: 'coral', body: 'What started as a temporary bridge became a permanent crutch—just as China executed a <strong>generational leap</strong> in cell chemistry.' }
    ],
    calloutLabel: 'THE INFLECTION //',
    calloutClass: '',
    calloutText: 'Pack assembly was a rational Phase-1 shortcut to seed the market—until Shenzhen moved the chemical goalposts.',
    ref: 'REF: ISSUE_01 // CAPEX_SHORTCUT',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part1',
    tag: 'PART I • 05/08',
    tagClass: '',
    kicker: 'FIG 1.5 — ELECTRO-CHEMICAL BENCHMARK SHIFT',
    kickerClass: '',
    title: 'While We Assembled Gen-1, China Rewrote the Physics',
    lead: 'Most Indian EVs today run on Gen-1 LFP packs (140–150 Wh/kg). BYD’s <strong>Second-Generation Blade Battery</strong> (LMFP + CTB) shatters every baseline metric simultaneously:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Bar chart comparing Gen-1 LFP versus Gen-2 LMFP Blade across energy density, fast charging, and volume utilization.">
      <text x="12" y="14" font-weight="700" font-size="8.2" fill="#CBD5E1">1. GRAVIMETRIC ENERGY DENSITY (Wh/kg)</text>
      <rect x="12" y="20" width="135" height="17" rx="2" fill="#334155"/>
      <text x="18" y="28.5" dominant-baseline="central" font-weight="600" font-size="7.8" fill="#E2E8F0">GEN-1 LFP: 140–150</text>
      <rect x="12" y="39" width="235" height="18" rx="2" fill="#E5A93C"/>
      <text x="18" y="48" dominant-baseline="central" font-weight="700" font-size="8" fill="#0B0E14">GEN-2 LMFP: 190–210 Wh/kg (+40% GAIN)</text>

      <text x="12" y="72" font-weight="700" font-size="8.2" fill="#CBD5E1">2. 10% TO 80% DC FAST-CHARGE TIME (MINUTES)</text>
      <rect x="12" y="78" width="220" height="17" rx="2" fill="#334155"/>
      <text x="18" y="86.5" dominant-baseline="central" font-weight="600" font-size="7.8" fill="#E2E8F0">GEN-1 (~1C–1.5C): 35–45 MINS</text>
      <rect x="12" y="97" width="85" height="18" rx="2" fill="#38BDF8"/>
      <text x="104" y="106" dominant-baseline="central" font-weight="700" font-size="8.2" fill="#38BDF8">GEN-2 (6C–8C): 8–10 MINS</text>

      <text x="12" y="130" font-weight="700" font-size="8.2" fill="#CBD5E1">3. PACK VOLUME UTILIZATION (CELL-TO-BODY CTB)</text>
      <rect x="12" y="136" width="145" height="18" rx="2" fill="#334155"/>
      <text x="84" y="145" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="7.8" fill="#E2E8F0">TRADITIONAL: ~50%</text>
      <rect x="162" y="136" width="146" height="18" rx="2" fill="#10B981"/>
      <text x="235" y="145" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#0B0E14">GEN-2 CTB: 76%+ USE</text>
    </svg>`,
    ledger: [
      { head: 'MANGANESE DOPING (LMFP)', headClass: 'coral', body: 'Raising voltage plateau from <strong>3.2V to 4.1V</strong> pushes LFP energy density into expensive Nickel-Manganese-Cobalt (NMC) territory without cobalt fire risks.' },
      { head: 'CELL-TO-BODY (CTB) FLOOR', headClass: 'sky', body: 'Eliminates intermediate modules; the battery top cover acts directly as the <strong>structural cabin floor</strong>, boosting torsional rigidity.' }
    ],
    calloutLabel: 'PARADIGM SHIFT //',
    calloutClass: '',
    calloutText: 'Safe, low-cost iron-base batteries now deliver 650+ km range and 10-minute charging. The old LFP vs. NMC trade-off is dead.',
    ref: 'REF: ISSUE_01 // GEN2_BLADE_SPECS',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part1',
    tag: 'PART I • 06/08',
    tagClass: '',
    kicker: 'FIG 1.6 — GEOPOLITICAL ARBITRAGE (PRESS NOTE 3)',
    kickerClass: '',
    title: 'Why BYD Happily Sells Cells to Indian Rivals',
    lead: 'Blocked from building a wholly-owned car plant in India under Press Note 3, BYD’s battery arm (<strong>FinDreams</strong>) gladly supplies cells to Indian automakers. Follow the asymmetric payoff:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Strategic diagram showing BYD FinDreams exporting Gen-1 cells to Indian OEMs while reserving Gen-2 CTB for BYD cars.">
      <rect x="75" y="8" width="170" height="32" rx="4" fill="#1E293B" stroke="#E5A93C"/>
      <text x="160" y="19" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9.2" fill="#F1F5F9">BYD (FINDREAMS BATTERY)</text>
      <text x="160" y="31" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="7.5" fill="#E5A93C">GLOBAL CELL FOUNDRY HUB</text>

      <path d="M120 40 V54 H80 V66" fill="none" stroke="#F43F5E" stroke-width="1.8"/>
      <path d="M200 40 V54 H240 V66" fill="none" stroke="#38BDF8" stroke-width="1.8"/>

      <rect x="12" y="66" width="138" height="86" rx="4" fill="#131924" stroke="#F43F5E" stroke-width="1.2"/>
      <rect x="12" y="66" width="138" height="20" rx="4" fill="#F43F5E"/>
      <text x="81" y="76" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFFFFF">SOLD TO INDIAN OEMs</text>
      <text x="81" y="98" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.6" fill="#F1F5F9">GEN-1 LFP CELLS</text>
      <text x="81" y="114" dominant-baseline="central" text-anchor="middle" font-size="7.6" fill="#CBD5E1">• Offloads aging fab lines</text>
      <text x="81" y="127" dominant-baseline="central" text-anchor="middle" font-size="7.6" fill="#CBD5E1">• Locks in blade geometry</text>
      <text x="81" y="140" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.6" fill="#FDA4AF">• Zero BMS source code</text>

      <rect x="170" y="66" width="138" height="86" rx="4" fill="#131924" stroke="#38BDF8" stroke-width="1.2"/>
      <rect x="170" y="66" width="138" height="20" rx="4" fill="#0284C7"/>
      <text x="239" y="76" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFFFFF">RESERVED FOR BYD CARS</text>
      <text x="239" y="98" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.6" fill="#F1F5F9">GEN-2 LMFP + CTB</text>
      <text x="239" y="114" dominant-baseline="central" text-anchor="middle" font-size="7.6" fill="#CBD5E1">• 200 Wh/kg energy density</text>
      <text x="239" y="127" dominant-baseline="central" text-anchor="middle" font-size="7.6" fill="#CBD5E1">• −75 kg structural floor</text>
      <text x="239" y="140" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.6" fill="#7DD3FC">• Full silicon-level BMS</text>
    </svg>`,
    ledger: [
      { head: 'DEPRECIATION SUBSIDY', headClass: 'coral', body: 'Indian EV buyers effectively <strong>fund the depreciation</strong> of China’s older Gen-1 LFP lines while Shenzhen retools its domestic fabs for Gen-2 LMFP.' },
      { head: 'CHASSIS LOCK-IN', headClass: 'sky', body: 'Once an Indian SUV platform is crash-certified around FinDreams’ exact blade dimensions, <strong>switching cell vendors</strong> requires a 3-year platform redesign.' }
    ],
    calloutLabel: 'STRATEGIC CHECKMATE //',
    calloutClass: '',
    calloutText: 'BYD monetizes the Indian EV boom duty-light via cell exports while keeping a 1-generation hardware moat for its own vehicles.',
    ref: 'REF: ISSUE_01 // TROJAN_HORSE',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part1',
    tag: 'PART I • 07/08',
    tagClass: '',
    kicker: 'FIG 1.7 — ELECTRO-CHEMICAL SOFTWARE LOCK-IN',
    kickerClass: '',
    title: 'Why You Can’t Just “Drop In” New Gen-2 Cells',
    lead: 'Even if an Indian automaker imports Gen-2 LMFP cells tomorrow, doping Manganese into LFP creates a <strong>two-step voltage drop</strong> that breaks standard Battery Management Systems (BMS):',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Voltage discharge curve showing LMFP double plateau at 4.1V and 3.4V versus standard LFP single flat plateau.">
      <line x1="46" y1="14" x2="46" y2="136" stroke="#64748B" stroke-width="1.5"/>
      <line x1="46" y1="136" x2="306" y2="136" stroke="#64748B" stroke-width="1.5"/>
      <text x="12" y="75" transform="rotate(-90 12,75)" text-anchor="middle" font-weight="700" font-size="8" fill="#94A3B8">VOLTAGE (V)</text>
      <text x="176" y="152" text-anchor="middle" font-weight="700" font-size="8" fill="#94A3B8">DISCHARGE / STATE OF CHARGE (SoC →)</text>

      <text x="41" y="36" dominant-baseline="central" text-anchor="end" font-weight="700" font-size="8.2" fill="#F1F5F9">4.1V</text>
      <text x="41" y="92" dominant-baseline="central" text-anchor="end" font-weight="700" font-size="8.2" fill="#F1F5F9">3.4V</text>

      <path d="M50 92 L265 97 L295 128" fill="none" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="155" y="114" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="7.8" fill="#94A3B8">Standard LFP (Single Flat Plateau)</text>

      <path d="M50 36 L134 38 C154 38 154 90 174 90 L265 93 L295 128" fill="none" stroke="#E5A93C" stroke-width="2.8"/>

      <text x="92" y="25" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#E5A93C">STEP 1: Mn (4.1V)</text>
      <text x="232" y="80" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#38BDF8">STEP 2: Fe (3.4V)</text>

      <circle cx="154" cy="64" r="10" fill="rgba(244,63,94,0.22)" stroke="#F43F5E" stroke-width="1.5"/>
      <line x1="164" y1="60" x2="180" y2="45" stroke="#F43F5E" stroke-width="1.2"/>
      <rect x="180" y="26" width="128" height="34" rx="3" fill="#1E293B" stroke="#F43F5E" stroke-width="1.2"/>
      <text x="244" y="37" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.6" fill="#F1F5F9">BMS CLIFF: 25% DASH</text>
      <text x="244" y="50" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.6" fill="#FDA4AF">DROPS TO 4% ON INCLINE</text>
    </svg>`,
    ledger: [
      { head: 'THE Mn → Fe VOLTAGE CLIFF', headClass: 'coral', body: 'At the transition from the 4.1V Manganese plateau to the 3.4V Iron plateau, lithium-ion diffusion resistance spikes and voltage <strong>plunges non-linearly</strong>.' },
      { head: 'KALMAN-FILTER BMS MOAT', headClass: 'sky', body: 'Preventing sudden highway range drops requires <strong>sub-millisecond impedance tables</strong> calibrated across thousands of destructive cell-aging cycles.' }
    ],
    calloutLabel: 'SOFTWARE BLIND SPOT //',
    calloutClass: '',
    calloutText: 'BYD owns both the cathode doping recipe and the Kalman-filter BMS code. Third-party cell buyers are flying blind.',
    ref: 'REF: ISSUE_01 // LMFP_BMS_CLIFF',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part1',
    tag: 'PART I • 08/08',
    tagClass: '',
    kicker: 'FIG 1.8 — 60 kWh PACK LANDED COST AUDIT',
    kickerClass: '',
    title: 'The ₹1.45 Lakh Per-Car Penalty',
    lead: 'Before a single wheel turns in an Indian showroom, a domestic automaker assembling a 60 kWh Gen-1 pack starts at a <strong>₹1.45 Lakh structural deficit</strong> against Shenzhen’s integrated Gen-2 CTB floor:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Landed cost of a 60 kWh pack: Indian OEM Gen-1 at ₹4.35 lakh versus Shenzhen Gen-2 CTB at ₹2.80 to 3.00 lakh, a gap of ₹1.45 lakh.">
      <line x1="12" y1="139" x2="308" y2="139" stroke="#64748B" stroke-width="1.8"/>
      <text x="76" y="16" text-anchor="middle" font-weight="700" font-size="11" fill="#FB7185">₹4.35 LAKH</text>

      <rect x="26" y="24" width="100" height="22" fill="#1E293B" stroke="#475569"/>
      <text x="76" y="35" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="8.2" fill="#E2E8F0">PACK BOM: ₹0.68L</text>

      <rect x="26" y="46" width="100" height="22" fill="#334155" stroke="#475569"/>
      <text x="76" y="57" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="8.2" fill="#E2E8F0">DUTY/PORT: ₹0.62L</text>

      <rect x="26" y="68" width="100" height="71" fill="#F43F5E"/>
      <text x="76" y="97" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9.2" fill="#FFFFFF">CELLS: ₹3.05L</text>
      <text x="76" y="111" dominant-baseline="central" text-anchor="middle" font-size="7.8" fill="#FFE4E6">($58–62/kWh CIF)</text>
      <text x="76" y="153" text-anchor="middle" font-weight="700" font-size="8.6" fill="#CBD5E1">IND OEM (GEN-1)</text>

      <path d="M126 24 H160 V59 H194" fill="none" stroke="#E5A93C" stroke-width="1.3" stroke-dasharray="3,2"/>
      <rect x="135" y="33" width="50" height="17" rx="3" fill="#E5A93C"/>
      <text x="160" y="41.5" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#0B0E14">−₹1.45L</text>

      <text x="244" y="51" text-anchor="middle" font-weight="700" font-size="11" fill="#38BDF8">₹2.80–3.00L</text>
      <rect x="194" y="59" width="100" height="80" fill="#0284C7"/>
      <text x="244" y="85" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9" fill="#FFFFFF">CTB INTEGRATED</text>
      <text x="244" y="100" dominant-baseline="central" text-anchor="middle" font-size="7.8" fill="#E0F2FE">30% FEWER CELLS</text>
      <text x="244" y="113" dominant-baseline="central" text-anchor="middle" font-size="7.8" fill="#E0F2FE">−75 KG MASS SAVED</text>
      <text x="244" y="153" text-anchor="middle" font-weight="700" font-size="8.6" fill="#CBD5E1">SHENZHEN (GEN-2)</text>
    </svg>`,
    ledger: [
      { head: 'WHY INDIA PAYS MORE', headClass: 'coral', body: 'Pays <strong>15–20% customs duty</strong> + sea freight on imported cells, plus redundant aluminum trays, busbars, and crash frames for local AIS-156 pack assembly.' },
      { head: 'HOW SHENZHEN WINS', headClass: 'sky', body: '200 Wh/kg LMFP cuts cell count by <strong>30%</strong>, while Cell-to-Body (CTB) makes the battery lid the cabin floor—deleting <strong>75 kg</strong> of dead metal.' }
    ],
    calloutLabel: 'NEXT IN PART II //',
    calloutClass: '',
    calloutText: 'Why can\'t Indian conglomerates just spend ₹4,000 Cr to build cell gigafactories at home? Continue to Part II.',
    ref: 'REF: ISSUE_01 // EV_BOM',
    footerRight: '<button class="slide-footer-btn" onclick="goToPart2()">CONTINUE PART II →</button>'
  },

  // PART II (01 - 07)
  {
    part: 'part2',
    tag: 'PART II • 01/07',
    tagClass: 'sky',
    kicker: 'FIG 2.1 — CAPEX & MANUFACTURING FOREWARNED',
    kickerClass: 'coral',
    title: 'The Gigafactory Trap: Obsolete Before Opening Day?',
    lead: 'In Part I, we saw why importing battery cells is a margin trap. So the obvious fix is spending <strong>₹4,000 Cr per 5 GWh</strong> to build Indian gigafactories—right? Look at the shopfloor math:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Industrial factory blueprint stamped with 4,000 Crore CAPEX per 5 GWh and stranded asset risk by 2028.">
      <polygon points="24,132 24,66 78,40 78,66 132,40 132,66 186,40 186,66 296,66 296,132" fill="#131924" stroke="#64748B" stroke-width="1.6"/>
      <rect x="242" y="18" width="22" height="48" fill="#334155"/>
      <line x1="12" y1="132" x2="308" y2="132" stroke="#64748B" stroke-width="1.8"/>
      <rect x="38" y="76" width="244" height="44" rx="4" fill="#F43F5E"/>
      <text x="160" y="92" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9.8" fill="#FFFFFF">₹4,000 CR CAPEX PER 5 GWh</text>
      <text x="160" y="108" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFE4E6">GEN-1 TURNKEY LINE = STRANDED BY 2028</text>
      <text x="160" y="148" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#E5A93C">BUYING TURNKEY MACHINES ≠ MASTERING YIELD</text>
    </svg>`,
    ledger: [
      { head: 'THE TURNKEY FALLACY', headClass: 'coral', body: 'Indian conglomerates treat battery cell manufacturing like a <strong>real-estate or cement project</strong>: import a turnkey Chinese line and flip the switch.' },
      { head: 'THE CHEMICAL REALITY', headClass: 'sky', body: 'A gigafactory is a high-speed <strong>precision chemical foundry</strong> where a 15% yield miss destroys the entire balance sheet.' }
    ],
    calloutLabel: 'CORE THESIS //',
    calloutClass: '',
    calloutText: 'Pouring billions into yesterday’s Gen-1 LFP equipment without upstream precursor control creates a depreciation time-bomb.',
    ref: 'REF: ISSUE_01 // GIGAFACTORY_CAPEX',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part2',
    tag: 'PART II • 02/07',
    tagClass: 'sky',
    kicker: 'FIG 2.2 — SHOPFLOOR PROCESS PHYSICS',
    kickerClass: '',
    title: 'Buying a Michelin Kitchen Doesn’t Make You a Chef',
    lead: 'India recently exempted customs duty on 85 categories of cell-making machinery. Anyone can import the ovens from Wuxi Lead. <strong>Process calibration is the real moat</strong>:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Three shopfloor bottlenecks: 90m/min electrode coating, -50C dew point cleanroom, and veteran process engineers.">
      <rect x="12" y="10" width="142" height="68" rx="4" fill="#131924" stroke="#334155"/>
      <rect x="12" y="10" width="142" height="19" rx="4" fill="#F43F5E"/>
      <text x="83" y="19.5" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.8" fill="#FFFFFF">01 • SLURRY COATING</text>
      <text x="83" y="42" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="13" fill="#F1F5F9">90+ m/min</text>
      <text x="83" y="60" dominant-baseline="central" text-anchor="middle" font-size="7.6" fill="#CBD5E1">±1.5 micron foil tolerance</text>

      <rect x="166" y="10" width="142" height="68" rx="4" fill="#131924" stroke="#334155"/>
      <rect x="166" y="10" width="142" height="19" rx="4" fill="#0284C7"/>
      <text x="237" y="19.5" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.8" fill="#FFFFFF">02 • DRY-ROOM DEW POINT</text>
      <text x="237" y="42" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="13" fill="#F1F5F9">−45° to −50°C</text>
      <text x="237" y="60" dominant-baseline="central" text-anchor="middle" font-size="7.6" fill="#CBD5E1">Zero moisture for LiPF6 salt</text>

      <rect x="12" y="90" width="296" height="62" rx="4" fill="#1E293B" stroke="#E5A93C"/>
      <text x="160" y="108" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.8" fill="#E5A93C">03 • THE HUMAN COMMISSIONING BOTTLENECK</text>
      <text x="160" y="125" dominant-baseline="central" text-anchor="middle" font-size="8" fill="#F1F5F9">Calibrating roller tension &amp; formation profiles requires veteran</text>
      <text x="160" y="139" dominant-baseline="central" text-anchor="middle" font-size="8" fill="#CBD5E1">Chinese process engineers—restricted by visa &amp; Press Note 3.</text>
    </svg>`,
    ledger: [
      { head: 'FOIL TENSION & MICRO-CRACKS', headClass: 'coral', body: 'Coating wet cathode slurry onto a 6-micron foil at highway speeds requires <strong>real-time viscosity tuning</strong> to prevent microscopic pinholes.' },
      { head: 'TACIT FLOOR KNOW-HOW', headClass: 'sky', body: 'Even European gigafactories (Northvolt) burned billions because <strong>imported hardware without resident Chinese technicians</strong> yields 30%+ scrap.' }
    ],
    calloutLabel: 'SHOPFLOOR REALITY //',
    calloutClass: '',
    calloutText: 'Duty-free machinery imports solve 20% of the problem. The other 80% is tacit chemical process engineering.',
    ref: 'REF: ISSUE_01 // PROCESS_ENGINEERING',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part2',
    tag: 'PART II • 03/07',
    tagClass: 'sky',
    kicker: 'FIG 2.3 — FORENSIC YIELD ECONOMICS',
    kickerClass: 'coral',
    title: 'The 20% Scrap-Rate Death Spiral',
    lead: 'In a battery gigafactory, raw materials (cathode powder, electrolyte, copper foil) represent <strong>75%–80% of total cell cost</strong>. Look at the unit-cost penalty when yields slip:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Yield comparison: Mature Chinese fab at 97% yield versus new non-Chinese fab at 75% yield and 25% scrap.">
      <text x="12" y="15" font-weight="700" font-size="8.2" fill="#38BDF8">SHENZHEN / NINGDE MATURE FAB (97%+ YIELD)</text>
      <rect x="12" y="22" width="278" height="28" rx="2" fill="#0284C7"/>
      <rect x="290" y="22" width="18" height="28" rx="2" fill="#F43F5E"/>
      <text x="151" y="36" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.8" fill="#FFFFFF">97% SALABLE GRADE-A CELLS</text>
      <text x="308" y="60" dominant-baseline="central" text-anchor="end" font-weight="700" font-size="7.8" fill="#FB7185">ONLY &lt;3% SCRAP</text>

      <text x="12" y="78" font-weight="700" font-size="8.2" fill="#FB7185">NEW GREENFIELD FAB RAMP-UP (70%–80% YIELD)</text>
      <rect x="12" y="85" width="214" height="28" rx="2" fill="#334155"/>
      <rect x="226" y="85" width="82" height="28" rx="2" fill="#F43F5E"/>
      <text x="119" y="99" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.8" fill="#F1F5F9">75% SALABLE</text>
      <text x="267" y="99" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.5" fill="#FFFFFF">25% SCRAP</text>

      <rect x="12" y="125" width="296" height="26" rx="4" fill="#1E293B" stroke="#E5A93C"/>
      <text x="160" y="138" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#E5A93C">20% SCRAP DESTROYS MORE MARGIN THAN ₹18,100 CR PLI</text>
    </svg>`,
    ledger: [
      { head: 'WHY SCRAP IS FATAL', headClass: 'coral', body: 'Unlike software or steel, rejected lithium cells cannot be melted down on-site. A 20% scrap rate inflates effective <strong>$/kWh cost by 22%–25%</strong>.' },
      { head: 'PLI SUBSIDY MIRAGE', headClass: 'sky', body: 'India’s ₹18,100 Cr ACC PLI scheme rewards output capacity, but <strong>no subsidy can offset</strong> throwing away one-fifth of imported active materials.' }
    ],
    calloutLabel: 'YIELD VERDICT //',
    calloutClass: '',
    calloutText: 'In battery manufacturing, gross margin is zero at 75% yield, break-even at 88%, and profitable only above 95%.',
    ref: 'REF: ISSUE_01 // YIELD_DEATH_SPIRAL',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part2',
    tag: 'PART II • 04/07',
    tagClass: 'sky',
    kicker: 'FIG 2.4 — UPSTREAM CHEMICAL CHOKEPOINTS',
    kickerClass: '',
    title: 'Even With a Working Factory, Who Owns the Inputs?',
    lead: 'Fast-charging at 6C–8C without internal lithium plating requires Silicon-Carbon (Si/C) anodes and ultra-thin current collectors. Look at China’s <strong>upstream monopoly</strong>:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="China global market share in battery precursors: over 92% in spherical graphite and nearly 100% in 4.5-micron copper foil.">
      <rect x="12" y="10" width="296" height="64" rx="4" fill="#131924" stroke="#334155"/>
      <rect x="12" y="10" width="88" height="64" rx="4" fill="#F43F5E"/>
      <text x="56" y="36" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="17" fill="#FFFFFF">&gt;92%</text>
      <text x="56" y="55" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.3" fill="#FFE4E6">CHINA SHARE</text>
      <text x="112" y="28" dominant-baseline="central" font-weight="700" font-size="8.6" fill="#F1F5F9">SPHERICAL GRAPHITE &amp; Si/C ANODES</text>
      <text x="112" y="45" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">Near-total control over battery-grade anode</text>
      <text x="112" y="58" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">graphitization, purification &amp; Si/C doping.</text>

      <rect x="12" y="88" width="296" height="64" rx="4" fill="#131924" stroke="#334155"/>
      <rect x="12" y="88" width="88" height="64" rx="4" fill="#0284C7"/>
      <text x="56" y="114" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="17" fill="#FFFFFF">~100%</text>
      <text x="56" y="133" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="7.3" fill="#E0F2FE">CHINA SHARE</text>
      <text x="112" y="106" dominant-baseline="central" font-weight="700" font-size="8.6" fill="#F1F5F9">4.5-MICRON COPPER FOIL &amp; LMFP CATHODE</text>
      <text x="112" y="123" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">Monopoly on electrodeposited titanium-drum</text>
      <text x="112" y="136" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">foil lines and nano-coated LMFP precursors.</text>
    </svg>`,
    ledger: [
      { head: 'PRECURSOR SCISSORS', headClass: 'coral', body: 'If an Indian cell plant achieves scale, Chinese chemical refiners can simply <strong>widen precursor export spreads</strong>—squeezing fab margins to zero.' },
      { head: 'EXPORT CONTROL RISK', headClass: 'sky', body: 'Beijing already placed high-density LFP/LMFP cathode preparation technologies and graphite processing on its <strong>export restriction list</strong>.' }
    ],
    calloutLabel: 'UPSTREAM REALITY //',
    calloutClass: '',
    calloutText: 'Building a cell fab without domestic anode, foil, and cathode refining just shifts import dependence one step upstream.',
    ref: 'REF: ISSUE_01 // PRECURSOR_MONOPOLY',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part2',
    tag: 'PART II • 05/07',
    tagClass: 'sky',
    kicker: 'FIG 2.5 — GRID INFRASTRUCTURE PHYSICS CHECK',
    kickerClass: '',
    title: 'The “8-Minute Charge” Brochure Illusion',
    lead: 'Charging a 60 kWh pack at 8C requires <strong>480 kW of continuous DC power</strong> per vehicle. Now run the grid load math when just 3 cars plug in simultaneously at a highway dhaba:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Power draw diagram: 3 EVs charging at 480 kW each converge into a 1.5 Megawatt grid load.">
      <rect x="12" y="10" width="88" height="40" rx="4" fill="#131924" stroke="#475569"/>
      <text x="56" y="23" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#CBD5E1">STALL #01 (8C)</text>
      <text x="56" y="38" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9.2" fill="#E5A93C">480 kW DC</text>

      <rect x="116" y="10" width="88" height="40" rx="4" fill="#131924" stroke="#475569"/>
      <text x="160" y="23" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#CBD5E1">STALL #02 (8C)</text>
      <text x="160" y="38" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9.2" fill="#E5A93C">480 kW DC</text>

      <rect x="220" y="10" width="88" height="40" rx="4" fill="#131924" stroke="#475569"/>
      <text x="264" y="23" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.2" fill="#CBD5E1">STALL #03 (8C)</text>
      <text x="264" y="38" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="9.2" fill="#E5A93C">480 kW DC</text>

      <path d="M56 50 V66 H160 M160 50 V78 M264 50 V66 H160" fill="none" stroke="#E5A93C" stroke-width="1.8"/>

      <rect x="16" y="78" width="288" height="72" rx="4" fill="#F43F5E"/>
      <text x="160" y="99" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="13.5" fill="#FFFFFF">= 1.44 TO 1.50 MEGAWATTS</text>
      <text x="160" y="118" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.5" fill="#0B0E14">EQUIVALENT TO A MID-SIZED STEEL ROLLING MILL</text>
      <text x="160" y="135" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="7.8" fill="#FFE4E6">Requires 800V–1000V SiC + Liquid Cables + Buffer BESS</text>
    </svg>`,
    ledger: [
      { head: '400V vs 800V CURRENT WALL', headClass: 'coral', body: 'Most Indian EVs use 400V architectures. Pushing 480 kW at 400V demands <strong>1,200 Amps</strong>—instantly melting standard air-cooled CCS2 cables.' },
      { head: 'SUBSTATION BOTTLENECK', headClass: 'sky', body: 'Indian highway feeders trip above 150–250 kW. Ultra-fast charging is impossible without co-located <strong>stationary battery buffers (BESS)</strong>.' }
    ],
    calloutLabel: 'GRID VERDICT //',
    calloutClass: '',
    calloutText: 'Without 800V Silicon-Carbide (SiC) car platforms and grid-scale buffer batteries at fuel pumps, 8-minute charging is brochure fiction.',
    ref: 'REF: ISSUE_01 // 8C_GRID_LOAD',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part2',
    tag: 'PART II • 06/07',
    tagClass: 'sky',
    kicker: 'FIG 2.6 — STRANDED CAPEX DEPRECIATION CLOCK',
    kickerClass: 'coral',
    title: 'Walking Into a 2028 Depreciation Trap',
    lead: 'Any Indian conglomerate committing ₹4,000 Cr today to import a turnkey Gen-1 LFP line is locking in 7 years of depreciation on <strong>yesterday’s electro-chemistry</strong>:',
    svg: `<svg viewBox="0 0 320 162" role="img" aria-label="Timeline from 2026 turnkey line order to 2027 yield struggle to 2028 obsolescence against 200+ Wh/kg LMFP and Sodium-Ion.">
      <line x1="28" y1="22" x2="28" y2="140" stroke="#64748B" stroke-width="2"/>

      <rect x="18" y="14" width="20" height="20" rx="3" fill="#F43F5E"/>
      <text x="28" y="24" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFFFFF">26</text>
      <rect x="48" y="10" width="260" height="36" rx="4" fill="#131924" stroke="#334155"/>
      <text x="56" y="22" dominant-baseline="central" font-weight="700" font-size="8.5" fill="#FDA4AF">2026: GEN-1 TURNKEY LINE ORDERED</text>
      <text x="56" y="35" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">Indian fab imports 145 Wh/kg LFP machinery from China.</text>

      <rect x="18" y="71" width="20" height="20" rx="3" fill="#E5A93C"/>
      <text x="28" y="81" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#0B0E14">27</text>
      <rect x="48" y="63" width="260" height="36" rx="4" fill="#131924" stroke="#334155"/>
      <text x="56" y="75" dominant-baseline="central" font-weight="700" font-size="8.5" fill="#E5A93C">2027: THE 18-MONTH YIELD SLOG</text>
      <text x="56" y="88" dominant-baseline="central" font-size="7.8" fill="#CBD5E1">Burning working capital pushing yield from 72% → 88%.</text>

      <rect x="18" y="124" width="20" height="20" rx="3" fill="#0284C7"/>
      <text x="28" y="134" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#FFFFFF">28</text>
      <rect x="48" y="116" width="260" height="36" rx="4" fill="rgba(56,189,248,0.12)" stroke="#38BDF8"/>
      <text x="56" y="128" dominant-baseline="central" font-weight="700" font-size="8.5" fill="#7DD3FC">2028: GLOBAL BENCHMARK LEAPS AHEAD</text>
      <text x="56" y="141" dominant-baseline="central" font-weight="600" font-size="7.8" fill="#F1F5F9">World shifts to 210 Wh/kg LMFP &amp; $40/kWh Sodium-Ion.</text>
    </svg>`,
    ledger: [
      { head: 'RIGID TOOLING TRAP', headClass: 'coral', body: 'High-voltage LMFP and Si/C anodes require different <strong>calendering pressures, formation voltages</strong>, and binder solvents than standard Gen-1 LFP lines.' },
      { head: 'IMPAIRMENT RISK', headClass: 'sky', body: 'By the day an Indian Gen-1 fab reaches 92% yield in 2028, Chinese foundries will dump <strong>fully depreciated cells at $42/kWh</strong>.' }
    ],
    calloutLabel: 'CAPITAL VERDICT //',
    calloutClass: '',
    calloutText: 'Competing head-on in commodity Gen-1 cell fabrication is a recipe for massive asset write-downs by FY28–29.',
    ref: 'REF: ISSUE_01 // 2028_OBSOLESCENCE',
    footerRight: '<span class="next">SWIPE →</span>'
  },
  {
    part: 'part2',
    tag: 'PART II • 07/07',
    tagClass: 'sky',
    kicker: 'FIG 2.7 — THE ASYMMETRIC CAPITAL PLAYBOOK',
    kickerClass: '',
    title: 'Where Smart Indian Capital Should Actually Hide',
    lead: 'Don’t fight a commodity chemical war where China owns the mines and subsidizes power. Capture these <strong class="sky-hl">4 chemistry-agnostic, high-ROCE moats</strong> instead:',
    quad: [
      { head: '01 • 800V SiC ELECTRONICS', body: 'Localize <strong>Silicon-Carbide (SiC) inverters</strong>, DC-DC converters, and onboard chargers mandatory for 4C–8C architectures.' },
      { head: '02 • KALMAN-FILTER BMS IP', body: 'Build silicon-level <strong>multi-chemistry BMS software</strong> capable of managing dual-plateau LMFP and Na-ion hybrids.' },
      { head: '03 • THERMAL & BESS GRIDS', body: 'Own <strong>refrigerant cooling plates</strong> and co-located highway BESS buffer storage stations for high-load charging hubs.' },
      { head: '04 • BLACK-MASS RECYCLING', body: 'Scale <strong>hydrometallurgical urban mining</strong> to extract 95%+ lithium, nickel, and copper from retired Indian EV packs.' }
    ],
    svg: `<button class="slide-cta-card" onclick="openShareModal('linkedin')" aria-label="Open Multi-Platform Share Hub">
      <svg viewBox="0 0 320 104" role="img" aria-label="Share The Convex Brief on LinkedIn, X, Facebook, and WhatsApp.">
        <rect x="4" y="4" width="312" height="96" rx="6" fill="#131924" stroke="#E5A93C" stroke-width="1.4"/>
        <rect x="4" y="4" width="312" height="22" rx="6" fill="#E5A93C"/>
        <text x="160" y="15" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8.5" fill="#0B0E14">SHARE THIS DISPATCH • LINKEDIN • X • FB • WHATSAPP</text>
        <text x="160" y="47" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="15" fill="#F1F5F9" letter-spacing="1">THE CONVEX BRIEF</text>
        <text x="160" y="68" dominant-baseline="central" text-anchor="middle" font-weight="600" font-size="8" fill="#CBD5E1">FORENSIC FINANCIALS • DEEP-TECH R&amp;D • INDIA–CHINA STRATEGY</text>
        <text x="160" y="85" dominant-baseline="central" text-anchor="middle" font-weight="700" font-size="8" fill="#38BDF8">CLICK TO OPEN MULTI-PLATFORM SHARE HUB ↗</text>
      </svg>
    </button>`,
    calloutLabel: 'FINAL VERDICT //',
    calloutClass: 'sky',
    calloutText: 'Let Chinese foundries fight the low-margin cell capacity war; own the power electronics, BMS code, and closed-loop recycling.',
    ref: 'REF: ISSUE_01 // THE_CONVEX_BRIEF',
    footerRight: '<button class="slide-footer-btn" onclick="openShareModal(\'linkedin\')">SHARE DISPATCH ↗</button>'
  }
];

function buildSlideMarkup(s, idx) {
  const bodyHtml = s.quad
    ? `<div class="quad-ledger">
        ${s.quad.map(q => `<div class="quad-cell"><div class="ledger-head sky">${q.head}</div><div class="ledger-body">${q.body}</div></div>`).join('')}
      </div>
      <div class="chart-box">${s.svg}</div>`
    : `<div class="chart-box">${s.svg}</div>
      <div class="spec-ledger">
        ${s.ledger.map(c => `<div class="ledger-col"><div class="ledger-head ${c.headClass}">${c.head}</div><div class="ledger-body">${c.body}</div></div>`).join('')}
      </div>`;

  return `
    <div class="slide-canvas ${s.part} ${idx === 0 ? 'visible' : ''}">
      <div class="obsidian-frame">
        <div class="header">
          <div class="brand">${BRAND_SVG}<span>THE CONVEX BRIEF</span></div>
          <div class="tag ${s.tagClass}">${s.tag}</div>
        </div>
        <div class="title-block">
          <div class="kicker ${s.kickerClass}">${s.kicker}</div>
          <h2>${s.title}</h2>
          <p class="lead">${s.lead}</p>
        </div>
        ${bodyHtml}
        <div class="callout">
          <span class="callout-label ${s.calloutClass}">${s.calloutLabel}</span> ${s.calloutText}
        </div>
        <div class="footer">
          <span>${s.ref}</span>
          ${s.footerRight}
        </div>
      </div>
    </div>`;
}

function hydrateDeck() {
  const deck = document.getElementById('deck');
  deck.innerHTML = SLIDES_DATA.map((s, i) => buildSlideMarkup(s, i)).join('');

  // Clone Slide 01 into Homepage Preview (Zero Duplication)
  const preview = document.getElementById('featuredSlidePreview');
  const firstSlide = deck.querySelector('.slide-canvas');
  if (preview && firstSlide) {
    const clone = firstSlide.cloneNode(true);
    clone.classList.add('visible');
    clone.style.border = 'none';
    clone.style.boxShadow = 'none';
    preview.innerHTML = '';
    preview.appendChild(clone);
  }
}

/* ---------------------------------------------------------------------
   2. HASH ROUTING & VIEW NAVIGATION
   --------------------------------------------------------------------- */
let activeView = 'home';
let currentLayoutMode = 'split';
let autoCarouselFromGrid = false;
let currentFilter = 'part1';
let currentIndex = 0;

function updateHash() {
  const targetHash = activeView === 'home'
    ? '#home'
    : (currentFilter === 'all' ? '#issue-01/all' : `#issue-01/${currentFilter}/${currentIndex + 1}`);
  if (window.location.hash !== targetHash) {
    history.pushState(null, '', targetHash);
  }
}

function navigateTo(viewName, skipHash) {
  activeView = viewName;
  document.getElementById('view-home').classList.toggle('active', viewName === 'home');
  document.getElementById('view-issue01').classList.toggle('active', viewName === 'issue01');
  document.getElementById('navHome').classList.toggle('active', viewName === 'home');
  document.getElementById('navIssue01').classList.toggle('active', viewName === 'issue01');

  window.scrollTo(0, 0);
  if (!skipHash) updateHash();
  if (viewName === 'issue01') updateCarouselView(true);
}

function syncFromHash() {
  const hash = (window.location.hash || '#home').replace(/^#/, '');
  if (hash.startsWith('issue-01')) {
    const parts = hash.split('/');
    if (parts[1] === 'part1' || parts[1] === 'part2') {
      currentFilter = parts[1];
      const parsed = parseInt(parts[2], 10);
      currentIndex = Number.isFinite(parsed) && parsed > 0 ? parsed - 1 : 0;
    } else if (parts[1] === 'all') {
      currentFilter = 'all';
    }
    syncFilterButtons();
    navigateTo('issue01', true);
  } else {
    navigateTo('home', true);
  }
}

/* ---------------------------------------------------------------------
   3. ARCHIVE FILTERING & LAYOUT MODE SWITCHER
   --------------------------------------------------------------------- */
function filterArchive(category, btn) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#archiveList .archive-row').forEach(row => {
    row.style.display = (category === 'all' || row.getAttribute('data-category') === category) ? '' : 'none';
  });
}

function setLayoutMode(mode, isManual) {
  if (isManual) autoCarouselFromGrid = false;
  currentLayoutMode = mode;
  const ws = document.getElementById('issueWorkspace');
  ws.classList.remove('mode-carousel', 'mode-reader');
  if (mode === 'carousel') ws.classList.add('mode-carousel');
  if (mode === 'reader') ws.classList.add('mode-reader');

  document.getElementById('modeSplit').classList.toggle('active', mode === 'split');
  document.getElementById('modeCarousel').classList.toggle('active', mode === 'carousel');
  document.getElementById('modeReader').classList.toggle('active', mode === 'reader');
  fitCarousel();
}

/* ---------------------------------------------------------------------
   4. CAROUSEL ENGINE (FIXED SCALING + SEAMLESS PART I <-> PART II)
   --------------------------------------------------------------------- */
function getActiveSlides() {
  const deck = document.getElementById('deck');
  return currentFilter === 'all'
    ? Array.from(deck.querySelectorAll('.slide-canvas'))
    : Array.from(deck.querySelectorAll(`.slide-canvas.${currentFilter}`));
}

function syncFilterButtons() {
  document.getElementById('btnPart1').classList.toggle('active', currentFilter === 'part1');
  document.getElementById('btnPart2').classList.toggle('active', currentFilter === 'part2');
  document.getElementById('btnAll').classList.toggle('active', currentFilter === 'all');
}

function fitCarousel() {
  if (activeView !== 'issue01') return;
  const col = document.getElementById('carouselColumn');
  const toolbar = document.getElementById('carouselToolbar');
  const activeSlides = document.querySelectorAll('#deck .slide-canvas.visible');
  if (!activeSlides.length) return;

  activeSlides.forEach(sl => {
    sl.style.transform = 'none';
    sl.style.marginBottom = '0px';
    sl.style.marginRight = '0px';
  });

  const colStyle = getComputedStyle(col);
  const padX = parseFloat(colStyle.paddingLeft) + parseFloat(colStyle.paddingRight);
  const availW = Math.max(260, col.clientWidth - padX);

  if (currentFilter === 'all') {
    const sAll = Math.min(1, availW / 405);
    if (sAll < 1) {
      activeSlides.forEach(sl => {
        sl.style.transform = `scale(${sAll})`;
        sl.style.marginBottom = `${(720 * sAll) - 720}px`;
        sl.style.marginRight = `${(405 * sAll) - 405}px`;
      });
    }
    return;
  }

  const isDesktopSplit = window.innerWidth > 1024 && currentLayoutMode === 'split';
  const tbH = toolbar ? toolbar.offsetHeight + 16 : 74;
  const availH = isDesktopSplit
    ? Math.max(360, col.clientHeight - tbH - 52)
    : Math.max(420, window.innerHeight - 175);

  const s = Math.min(1, availW / 405, availH / 720);
  const slide = activeSlides[0];
  if (s < 1 && isFinite(s) && s > 0) {
    slide.style.transform = `scale(${s})`;
    slide.style.marginBottom = `${(720 * s) - 720}px`;
    slide.style.marginRight = `${(405 * s) - 405}px`;
  }
}

function updateCarouselView(skipHash) {
  document.querySelectorAll('#deck .slide-canvas').forEach(s => s.classList.remove('visible'));
  const targetSlides = getActiveSlides();
  const nav = document.getElementById('singleNav');

  if (currentFilter === 'all') {
    targetSlides.forEach(s => s.classList.add('visible'));
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    if (currentIndex >= targetSlides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = targetSlides.length - 1;
    targetSlides[currentIndex].classList.add('visible');
    document.getElementById('slideCounter').textContent = `${currentIndex + 1} / ${targetSlides.length}`;
  }

  fitCarousel();
  if (!skipHash && activeView === 'issue01') updateHash();
}

function setFilter(filter) {
  currentFilter = filter;
  currentIndex = 0;
  syncFilterButtons();

  if (filter === 'all' && window.innerWidth > 1024 && currentLayoutMode === 'split') {
    autoCarouselFromGrid = true;
    setLayoutMode('carousel', false);
  } else if (filter !== 'all' && autoCarouselFromGrid) {
    autoCarouselFromGrid = false;
    setLayoutMode('split', false);
  }

  updateCarouselView();
}

function goToPart2() {
  setFilter('part2');
}

function changeSlide(delta) {
  if (currentFilter === 'all') return;
  const targetSlides = getActiveSlides();
  const nextIdx = currentIndex + delta;

  // Seamless transition between Part I and Part II
  if (currentFilter === 'part1' && nextIdx >= targetSlides.length) {
    currentFilter = 'part2';
    currentIndex = 0;
    syncFilterButtons();
  } else if (currentFilter === 'part2' && nextIdx < 0) {
    currentFilter = 'part1';
    currentIndex = document.querySelectorAll('#deck .slide-canvas.part1').length - 1;
    syncFilterButtons();
  } else {
    currentIndex = nextIdx;
  }

  updateCarouselView();
}

function syncSlide(part, slideIdx) {
  if (window.innerWidth > 1024 && currentLayoutMode === 'reader') {
    setLayoutMode('split', true);
  }
  currentFilter = part;
  currentIndex = slideIdx;
  syncFilterButtons();
  updateCarouselView();

  const activeSlide = getActiveSlides()[currentIndex];
  if (activeSlide) {
    activeSlide.classList.remove('sync-pulse');
    void activeSlide.offsetWidth;
    activeSlide.classList.add('sync-pulse');
  }

  if (window.innerWidth <= 1024) {
    document.getElementById('carouselColumn').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ---------------------------------------------------------------------
   5. MULTI-PLATFORM SHARE HUB (LINKEDIN, X, FACEBOOK, WHATSAPP)
   --------------------------------------------------------------------- */
const SHARE_PLATFORMS = {
  linkedin: {
    label: 'LinkedIn',
    shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(ISSUE_URL)}`,
    preview: 'Every domestic EV launch celebrates panoramic sunroofs & OLED screens. Almost nobody checks the ₹1.45 Lakh BOM deficit sitting under the floorboard.\n\nIn Issue #01 of The Convex Brief, we audit India’s EV value chain & the ₹4,000 Cr gigafactory trap.',
    copy: `Every domestic EV launch celebrates panoramic sunroofs & curved OLED screens. Almost nobody checks the ₹1.45 Lakh BOM deficit sitting under the floorboard.

In Issue #01 of The Convex Brief, we run a 2-part forensic audit of India’s EV supply chain:

1. The ₹1.45 Lakh Structural Penalty: Why a 60 kWh Gen-1 pack lands at ₹4.35L in India vs Shenzhen's ₹2.90L Gen-2 CTB floor.
2. The LMFP Voltage Cliff: Why Indian OEMs can't simply "drop in" BYD's 200 Wh/kg cells without proprietary Kalman-filter BMS code.
3. The 20% Scrap Death Spiral: Why buying turnkey Gen-1 cell equipment without process yield mastery risks a 2028 stranded-asset trap.
4. Four Chemistry-Agnostic Moats: 800V SiC power electronics, multi-chemistry BMS IP, highway BESS buffers, and black-mass recycling.

Swipe the 15-slide interactive deck + read the full deep dive:
${ISSUE_URL}

#IndianEV #SupplyChain #BatteryTech #DeepTech #Manufacturing`
  },
  x: {
    label: 'X (Twitter)',
    shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent('40% of an Indian EV’s BOM is still imported Chinese cells—creating a ₹1.45 Lakh structural cost gap per 60 kWh SUV.\n\nSwipe our 15-slide forensic breakdown of India’s EV supply chain & the ₹4,000 Cr gigafactory trap:')}&url=${encodeURIComponent(ISSUE_URL)}`,
    preview: '40% of an Indian EV’s BOM is still imported Chinese cells—creating a ₹1.45 Lakh structural cost gap per 60 kWh SUV.\n\nSwipe the 15-slide forensic breakdown of the LMFP voltage cliff & 2028 gigafactory trap 🧵👇',
    copy: `40% of an Indian EV’s BOM is still imported Chinese cells—creating a ₹1.45 Lakh structural cost gap per 60 kWh SUV.

In Issue #01 of The Convex Brief, we break down the LMFP voltage cliff, 20% gigafactory scrap economics & 4 high-ROCE moats for Indian capital:

${ISSUE_URL}`
  },
  facebook: {
    label: 'Facebook',
    shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(ISSUE_URL)}&quote=${encodeURIComponent('Is India Repeating Its Smartphone Mistake with EVs? Read Issue #01 of The Convex Brief.')}`,
    preview: 'Is India repeating its 2014 smartphone playbook with electric vehicles? We broke down the 60 kWh battery cost math, BYD’s Gen-2 Blade leap, and where Indian industry can actually win.',
    copy: `Is India repeating its 2014 smartphone playbook with electric vehicles?

While domestic launches highlight sunroofs and screens, ~40% of an EV's Bill of Materials still comes from imported lithium-ion cells. In Issue #01 of The Convex Brief, we break down the ₹1.45 Lakh per-car cost deficit, why 8-minute charging hits a 1.5 MW highway grid wall, and 4 high-margin layers where Indian companies can build lasting moats.

Swipe the 15-slide visual deck and read the full breakdown here:
${ISSUE_URL}`
  },
  whatsapp: {
    label: 'WhatsApp',
    shareUrl: `https://wa.me/?text=${encodeURIComponent(`*THE CONVEX BRIEF // ISSUE #01* ⚡\n*Is India Repeating Its Smartphone Mistake with EVs? & The Gigafactory Trap*\n\n40% of an Indian EV's BOM is still imported Chinese cells—a ₹1.45L per-car deficit.\n\n📊 Swipe the 15-slide interactive deck + full audit:\n${ISSUE_URL}`)}`,
    preview: '⚡ THE CONVEX BRIEF // ISSUE #01\nEveryone applauds panoramic sunroofs on Indian EVs. Almost nobody checks the ₹1.45 Lakh BOM deficit under the floorboard...',
    copy: `*THE CONVEX BRIEF // ISSUE #01* ⚡
*Is India Repeating Its Smartphone Mistake with EVs? & The Gigafactory Trap*

Every domestic EV launch celebrates panoramic sunroofs & OLED screens. Almost nobody looks under the floorboard—where *40% of the car's BOM* is still imported Chinese lithium-ion cells.

Inside today's 2-part forensic breakdown:
▪️ *The ₹1.45 Lakh Penalty:* Indian 60 kWh Gen-1 pack (₹4.35L) vs Shenzhen Gen-2 CTB (₹2.90L).
▪️ *The LMFP Voltage Cliff:* Why you can't "drop in" 200 Wh/kg cells without Kalman-filter BMS code.
▪️ *The 20% Scrap Death Spiral:* Why ₹4,000 Cr turnkey Gen-1 cell fabs risk 2028 write-downs.
▪️ *4 High-ROCE Moats:* 800V SiC, BMS IP, BESS buffers, Black-Mass recycling.

📊 *Swipe the 15-slide interactive deck + read the full audit:*
${ISSUE_URL}`
  }
};

let activeSharePlatform = 'linkedin';
let lastFocusedElement = null;

function initShareLinks() {
  document.getElementById('directLinkedin').href = SHARE_PLATFORMS.linkedin.shareUrl;
  document.getElementById('directX').href = SHARE_PLATFORMS.x.shareUrl;
  document.getElementById('directFacebook').href = SHARE_PLATFORMS.facebook.shareUrl;
  document.getElementById('directWhatsapp').href = SHARE_PLATFORMS.whatsapp.shareUrl;
}

function selectSharePlatform(platform) {
  activeSharePlatform = platform;
  const cfg = SHARE_PLATFORMS[platform];

  document.querySelectorAll('.platform-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-platform') === platform);
  });

  document.getElementById('previewHeading').textContent = `01 • ${cfg.label.toUpperCase()} PREVIEW`;
  document.getElementById('copyHeading').textContent = `02 • READY-TO-PASTE ${cfg.label.toUpperCase()} POST`;
  document.getElementById('platformPreviewText').textContent = cfg.preview;
  document.getElementById('shareCopyBox').value = cfg.copy;

  const launchBtn = document.getElementById('launchActivePlatform');
  launchBtn.href = cfg.shareUrl;
  launchBtn.textContent = `Share on ${cfg.label} ↗`;
}

function openShareModal(platform) {
  lastFocusedElement = document.activeElement;
  selectSharePlatform(platform || 'linkedin');
  const modal = document.getElementById('shareModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalCloseBtn').focus();
}

function closeShareModal() {
  const modal = document.getElementById('shareModal');
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function handleModalBackdrop(e) {
  if (e.target === document.getElementById('shareModal')) closeShareModal();
}

async function copyShareText() {
  const textarea = document.getElementById('shareCopyBox');
  const btn = document.getElementById('copyShareBtn');
  let success = false;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(textarea.value);
      success = true;
    } catch (_) {
      success = false;
    }
  }

  if (!success) {
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    try {
      success = document.execCommand('copy');
    } catch (_) {
      success = false;
    }
  }

  if (success) {
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy Post Text';
      btn.classList.remove('copied');
    }, 2200);
  }
}

/* ---------------------------------------------------------------------
   6. TOUCH SWIPE, KEYBOARD NAV & MODAL FOCUS TRAP
   --------------------------------------------------------------------- */
let touchStartX = 0;
let touchStartY = 0;
const stageEl = document.getElementById('stage');

stageEl.addEventListener('touchstart', e => {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

stageEl.addEventListener('touchend', e => {
  if (currentFilter === 'all' || !e.changedTouches.length) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
    changeSlide(dx < 0 ? 1 : -1);
  }
}, { passive: true });

document.addEventListener('keydown', e => {
  const modal = document.getElementById('shareModal');
  const modalOpen = modal.classList.contains('open');

  if (e.key === 'Escape' && modalOpen) {
    closeShareModal();
    return;
  }

  // Focus trap inside modal
  if (e.key === 'Tab' && modalOpen) {
    const focusables = modal.querySelectorAll('button, a[href], textarea');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
    return;
  }

  if (activeView === 'issue01' && !modalOpen && currentFilter !== 'all') {
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'ArrowLeft') changeSlide(-1);
  }
});

/* ---------------------------------------------------------------------
   7. INITIALIZATION
   --------------------------------------------------------------------- */
window.addEventListener('resize', fitCarousel);
window.addEventListener('orientationchange', fitCarousel);
window.addEventListener('hashchange', syncFromHash);

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitCarousel);
}

window.addEventListener('DOMContentLoaded', () => {
  hydrateDeck();
  initShareLinks();
  syncFromHash();
});