// Series 63 flashcards — focused on the numbers to memorize.
// Each card: { chapter, front, back, key }  (key = the number-ish answer, shown big)
window.CARDS = [
  // ---------- Chapter 1: Regulation of Broker-Dealers and Agents ----------
  {
    chapter: "Ch 1: BDs & Agents",
    front: "When does a registration become effective for BDs and agents?",
    back: "Noon of the 30th day after the application is filed.",
    key: "30 days (noon)",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "How long can an agent do business with a client in a “vacation” state before registering?",
    back: "Temporarily for 30 days before registering.",
    key: "30 days",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "How long can an agent do business with a client who relocates before registering?",
    back: "Up to 60 days before registering.",
    key: "60 days",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "Within how long must an agent file registration in the new state after a client relocates?",
    back: "Within 10 business days of the latter of (a) learning the client relocated, or (b) the date the customer requested a trade from the new state.",
    key: "10 business days",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "Exempt commercial paper / promissory notes: credit rating, denomination, and maturity requirements?",
    back: "Top three credit rankings, denomination of at least $50k, and maturity of less than 9 months.",
    key: "Top 3 · $50k · <9 mo (270 days)",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "Maximum maturity (in days) for the exempt commercial paper?",
    back: "Less than nine months = 270 days.",
    key: "270 days",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "When do state registrations expire?",
    back: "December 31st of each calendar year, unless the renewal fee is paid.",
    key: "December 31",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "Within how long must changes to U4 information be updated?",
    back: "Within 30 days of the change.",
    key: "30 days",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    front: "By when must Canadian BDs/agents with limited registration file renewal applications and fees?",
    back: "By December 1st of each year.",
    key: "December 1",
  },

  // ---------- Chapter 2: Investment Advisers & IARs ----------
  {
    chapter: "Ch 2: IAs & IARs",
    front: "AUM threshold that makes an IA federally covered (and where it becomes optional)?",
    back: "More than $110M AUM makes you federally covered; at $100M it is optional.",
    key: "$110M ( $100M optional)",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    front: "Pension consultant plan value that makes an IA federally covered?",
    back: "Pension consultants to plans with an aggregate value of at least $200M.",
    key: "$200M",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    front: "Private fund AUM that makes an IA federally covered?",
    back: "Advises private funds (venture capital, hedge funds) with AUM of $150M or more.",
    key: "$150M",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    front: "When must a state-covered IA register in a state (retail client trigger)?",
    back: "If it has a place of business in the state OR more than 5 retail clients who are residents of that state within the past 12 months.",
    key: ">5 retail clients / 12 mo",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    front: "Minimum net worth for an IA that has custody of client assets?",
    back: "$35,000 minimum net worth.",
    key: "$35k (custody)",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    front: "Minimum net worth for an IA that has discretionary authority?",
    back: "$10,000 minimum net worth.",
    key: "$10k (discretion)",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    front: "When must an IA maintain positive net worth at all times (fee prepayment trigger)?",
    back: "Advisers who accept repayment of fees of more than $500 per client, six or more months in advance.",
    key: ">$500 · 6+ months",
  },

  // ---------- Chapter 3: Securities & Issuers ----------
  {
    chapter: "Ch 3: Securities & Issuers",
    front: "Reg D private placement: maximum number of non-accredited investors?",
    back: "Max 35 non-accredited investors (unlimited accredited investors).",
    key: "35 non-accredited",
  },
  {
    chapter: "Ch 3: Securities & Issuers",
    front: "Qualified purchaser thresholds (individual/family vs. entity)?",
    back: "An individual or family-owned business with at least $5M in investments, OR an entity managing at least $25M in investments for other qualified purchasers.",
    key: "$5M individual / $25M entity",
  },
  {
    chapter: "Ch 3: Securities & Issuers",
    front: "Notice filing deadline after the first sale of a federal covered security in a state?",
    back: "Typically required within 15 days after the first sale.",
    key: "15 days",
  },
  {
    chapter: "Ch 3: Securities & Issuers",
    front: "How long are notice filings valid, and how often renewed?",
    back: "Valid for 12 months and renewed every 12 months.",
    key: "12 months",
  },
  {
    chapter: "Ch 3: Securities & Issuers",
    front: "Filing by coordination: how far in advance must statements be on file with the state?",
    back: "At least 10 days before taking effect.",
    key: "10 days",
  },

  // ---------- Chapter 4: USA Remedies & Administrative Provisions ----------
  {
    chapter: "Ch 4: Remedies",
    front: "Within how long can an administrator's order be appealed to the state court system?",
    back: "By written petition within 60 days of the order's issuance.",
    key: "60 days",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "When does a withdrawal of registration become effective?",
    back: "30 days after receipt of the application to withdraw (or earlier, as determined by the administrator).",
    key: "30 days",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "How long does the administrator have after a withdrawal's effective date to initiate proceedings for suspension/revocation?",
    back: "1 year after the effective date of the withdrawal.",
    key: "1 year",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "Deadline to request court review (appeal) after a final order to deny/revoke/suspend?",
    back: "Written petition within 60 days of the final order.",
    key: "60 days",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "Last opportunity to initiate a lawsuit for a USA violation?",
    back: "The earlier of 3 years after the event occurred OR 2 years after discovery of the facts.",
    key: "Earlier of 3 yr / 2 yr",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "Criminal penalties for USA (state) violations?",
    back: "Maximum fine of $5,000 and/or maximum imprisonment of 3 years.",
    key: "$5k / 3 years",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "Criminal penalties for federal violations?",
    back: "Maximum $5M in fines and/or maximum imprisonment of 20 years.",
    key: "$5M / 20 years",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "Within how long must an offer of rescission be accepted?",
    back: "Within 30 days of receipt.",
    key: "30 days",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "BD record-keeping retention period?",
    back: "Minimum 3 years in an easily accessible place; first 2 years in a ready location (principal's office).",
    key: "3 years (2 ready)",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "IA record-keeping retention period?",
    back: "Minimum 5 years in an easily accessible place; first 2 years in an appropriate office of the IA.",
    key: "5 years (2 ready)",
  },
  {
    chapter: "Ch 4: Remedies",
    front: "How long must organizational documents be maintained?",
    back: "For the life of the firm and 3 years after its termination.",
    key: "Life + 3 years",
  },

  // ---------- Chapter 5: Communications with Customers & Prospects ----------
  {
    chapter: "Ch 5: Communications",
    front: "IA brochure delivery timing and the client's termination window?",
    back: "Delivered within 48 hours prior to entering the contract, OR at the time of entering — but then the client may terminate without penalty within 5 business days.",
    key: "48 hrs / 5 business days",
  },
  {
    chapter: "Ch 5: Communications",
    front: "SEC-registered IA prepayment threshold requiring an audited balance sheet?",
    back: "Prepayment of more than $1,200 in fees, 6 or more months in advance.",
    key: ">$1,200 · 6+ months",
  },
  {
    chapter: "Ch 5: Communications",
    front: "State-registered IA prepayment threshold requiring an audited balance sheet?",
    back: "Prepayment of more than $500 in fees, 6 or more months in advance.",
    key: ">$500 · 6+ months",
  },
  {
    chapter: "Ch 5: Communications",
    front: "Deadline to file the annual updating amendment to the IA brochure?",
    back: "Within 90 days of the IA's fiscal year end (filed through IARD).",
    key: "90 days",
  },
  {
    chapter: "Ch 5: Communications",
    front: "Deadline to deliver the updated brochure / summary of material changes to clients?",
    back: "Within 120 days of the end of the fiscal year.",
    key: "120 days",
  },

  // ---------- Chapter 6: Ethical Practices & Obligations ----------
  {
    chapter: "Ch 6: Ethics",
    front: "Statute of limitations for criminal actions?",
    back: "Five years for criminal actions.",
    key: "5 years",
  },
  {
    chapter: "Ch 6: Ethics",
    front: "Time limit to bring civil actions?",
    back: "The earlier of 3 years from the violation or 2 years from discovery.",
    key: "Earlier of 3 yr / 2 yr",
  },
  {
    chapter: "Ch 6: Ethics",
    front: "Deadline to obtain written discretionary authority after oral authority is given?",
    back: "Within 10 business days after the date of the first transaction placed after being given oral discretionary authority.",
    key: "10 business days",
  },
  {
    chapter: "Ch 6: Ethics",
    front: "Data breach: how fast must the SEC be notified, and customers?",
    back: "SEC within 48 hours; customers as soon as practicable but no more than 30 days.",
    key: "48 hrs SEC / 30 days customers",
  },
  {
    chapter: "Ch 6: Ethics",
    front: "Qualified client thresholds (AUM and net worth)?",
    back: "At least $1.1M of AUM, or more than $2.2M of net worth.",
    key: "$1.1M AUM / $2.2M net worth",
  },
  {
    chapter: "Ch 6: Ethics",
    front: "Suspected financial exploitation of an eligible adult: initial disbursement hold?",
    back: "May delay disbursements (but not transactions) for up to 15 business days.",
    key: "15 business days",
  },
  {
    chapter: "Ch 6: Ethics",
    front: "Financial exploitation hold: how much can it be extended, and by whom?",
    back: "Up to 10 additional business days, by the administrator or adult protective services.",
    key: "+10 business days",
  },

  // ================= CONCEPT CARDS (non-numerical) =================

  // ---------- Chapter 1 ----------
  {
    chapter: "Ch 1: BDs & Agents",
    type: "concept",
    front: "When must a broker-dealer register in a state?",
    key: "In the business + (office OR retail client)",
    back: "When it is in the business of effecting securities transactions AND it has either an office in the state or one or more retail clients who are residents of the state.",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    type: "concept",
    front: "When is a broker-dealer EXEMPT from registering in a state?",
    key: "No office + only BDs/institutions or snowbird client",
    back: "No place of business in the state, AND either (a) its business is only with other BDs / institutional investors (banks, savings, trusts, insurance, investment cos., pensions), or (b) its only business is with an existing retail customer temporarily in the state who resides where the firm is properly registered.",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    type: "concept",
    front: "What three things must be true to be an agent?",
    key: "Natural person · sponsored · transacting (ODR)",
    back: "Must be a natural person (not an entity), sponsored by a registered broker-dealer or issuer, and transacting — offering/selling — securities business.",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    type: "concept",
    front: "The 5 exempt SECURITIES where an agent representing an issuer need not register?",
    key: "Gov't · diplomatic gov'ts · banks · prime paper · employee plans",
    back: "1) US/Canadian federal & municipal gov't securities; 2) foreign gov't securities where the US has diplomatic relations; 3) US commercial bank, savings institution & trust company securities; 4) top-3-rated commercial paper ($50k+, <9 mo); 5) investment contracts for employee stock-purchase / savings / pension / profit-sharing plans.",
  },
  {
    chapter: "Ch 1: BDs & Agents",
    type: "concept",
    front: "The 4 exempt TRANSACTIONS where an agent need not register?",
    key: "Unsolicited · issuer–underwriter · institutional · private placement",
    back: "1) Unsolicited transactions (client-initiated); 2) transactions between issuers and underwriters; 3) institutional transactions; 4) private placements.",
  },

  // ---------- Chapter 2 ----------
  {
    chapter: "Ch 2: IAs & IARs",
    type: "concept",
    front: "Besides the AUM dollar tests, what qualitative factors make an IA federally covered?",
    key: "Advises mutual funds · internet adviser · pension consultant · private funds",
    back: "Advising investment companies (mutual funds), being an internet adviser, being a pension consultant to large plans, or advising private funds — any of these makes an IA federally covered regardless of the $110M line.",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    type: "concept",
    front: "When must an investment adviser register in a state?",
    key: "Office in state OR >5 retail residents (12 mo)",
    back: "If it has a place of business in the state, or more than 5 retail clients who are residents of that state within the past 12 months.",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    type: "concept",
    front: "Where must an IAR register, based on its IA's status?",
    key: "Fed IA → office only · State IA → office or >5 clients",
    back: "If the IA is federally covered, only where the IAR has an office. If the IA is state-covered, where the IAR has an office or more than 5 retail clients. IARs never register with the SEC.",
  },
  {
    chapter: "Ch 2: IAs & IARs",
    type: "concept",
    front: "Besides the net-worth minimums, what other IA registration requirements exist?",
    key: "Surety bonds · maintain records",
    back: "Posting surety bonds (protection against loss/theft of securities by employees) and maintaining records.",
  },

  // ---------- Chapter 3 ----------
  {
    chapter: "Ch 3: Securities & Issuers",
    type: "concept",
    front: "Reg D private placement — accredited vs. non-accredited investors?",
    key: "≤35 non-accredited · UNLIMITED accredited",
    back: "A maximum of 35 non-accredited investors, but an unlimited number of accredited investors.",
  },
  {
    chapter: "Ch 3: Securities & Issuers",
    type: "concept",
    front: "What is a 'qualified purchaser'?",
    key: "$5M-investment individual OR $25M-managing entity",
    back: "An individual or family-owned business with at least $5M in investments, OR an entity that manages at least $25M in investments for other qualified purchasers.",
  },

  // ---------- Chapter 4 ----------
  {
    chapter: "Ch 4: Remedies",
    type: "concept",
    front: "Where must BD vs. IA records be kept?",
    key: "BD → principal's office · IA → an office of the IA",
    back: "BDs: min 3 years, first 2 years in a ready location (the principal's office). IAs: min 5 years, first 2 years in an appropriate office of the IA.",
  },
  {
    chapter: "Ch 4: Remedies",
    type: "concept",
    front: "When can an administrator's order or final order be appealed, and how?",
    key: "Written petition within 60 days",
    back: "By filing a written petition with the state court system within 60 days of the order's issuance (same 60-day window for court review after a final order to deny/revoke/suspend).",
  },

  // ---------- Chapter 5 ----------
  {
    chapter: "Ch 5: Communications",
    type: "concept",
    front: "When must an IA brochure be delivered, and what does late delivery trigger?",
    key: "48 hrs before, OR at signing + 5-day free exit",
    back: "Within 48 hours prior to entering the advisory contract, or at the time of signing — but then the client may terminate without penalty within 5 business days.",
  },

  // ---------- Chapter 6 ----------
  {
    chapter: "Ch 6: Ethics",
    type: "concept",
    front: "In suspected financial exploitation of an eligible adult, what may be delayed — and what may NOT?",
    key: "Delay DISBURSEMENTS, not TRANSACTIONS",
    back: "The firm may delay disbursements (up to 15 business days, extendable by +10), but may NOT delay transactions.",
  },
  {
    chapter: "Ch 6: Ethics",
    type: "concept",
    front: "How can an agent act on ORAL discretionary authority?",
    key: "OK if written authority obtained within 10 business days",
    back: "Oral discretion is permitted for the first transaction, provided written discretionary authority is obtained within 10 business days of that first transaction.",
  },
];
