const DB_RAW = [
  {
    "i": "H40.11",
    "n": "Primary open-angle glaucoma",
    "c": "Glaucoma",
    "r": "3-4 Mos",
    "s": "13774005",
    "p": [
      "65855",
      "92020",
      "92083",
      "92133"
    ],
    "pearl": "Stagger structural (OCT) and functional (VF) testing across alternate visits to maintain continuous monitoring while avoiding unbundling audits.",
    "pitfall": "Billing 92133 and 92250 on the same date for glaucoma without documented separate pathology triggers an automatic NCCI denial.",
    "min": {
      "f": 259.0,
      "d": "2 visits/year. Defaults to routine eye codes (92014/92012). Clumps OCT (92133) and VF (92083) into Visit 1, exhausting the 6-month LCD frequency limit. Omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 703.6,
      "d": "4 visits/year (Q3M). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF 24-2 (Visits 2 & 4) to remain strictly compliant with LCD frequency caps. Adds annual gonioscopy (92020) at Visit 1."
    }
  },
  {
    "i": "H40.12",
    "n": "Low-tension glaucoma (NTG)",
    "c": "Glaucoma",
    "r": "3-4 Mos",
    "s": "42197000",
    "p": [
      "92083",
      "92133"
    ],
    "pearl": "In NTG, macular GCC analysis is often more sensitive than peripapillary RNFL. Consider adding 10-2 visual fields to catch central paracentral defects.",
    "pitfall": "Failing to document diurnal IOP variations or baseline systemic blood pressure/nocturnal hypotension leaves target IOP unsubstantiated.",
    "min": {
      "f": 236.0,
      "d": "2 visits/year. Billed as 99213 at 6-month intervals. Relies on IOP checks alone; misses nocturnal dips and structural progression."
    },
    "max": {
      "f": 647.6,
      "d": "4 visits/year. 99214 + G2211 at each encounter. Serial 10-2 and 24-2 VF testing (92083) to detect central fixation-threatening scotomas. Staggered OCT ganglion cell analysis (92133)."
    }
  },
  {
    "i": "H40.14",
    "n": "Capsular glaucoma (PXG)",
    "c": "Glaucoma",
    "r": "2-3 Mos",
    "s": "401090000",
    "p": [
      "65855",
      "92083",
      "92133"
    ],
    "pearl": "PXG responds exceptionally well to Selective Laser Trabeculoplasty (65855) due to heavily pigmented trabecular meshwork.",
    "pitfall": "Watch for rapid lens subluxation or zonular weakness. Chart zonular status before surgical referral to avoid surgical complications.",
    "min": {
      "f": 259.0,
      "d": "2 visits/year. Routine eye codes (92014/92012). Infrequent surveillance risks missing aggressive IOP spikes typical of pseudoexfoliation."
    },
    "max": {
      "f": 948.6,
      "d": "4 visits/year (Q3M) + SLT. 99214 + G2211 quarterly. Rapidly escalates to in-office laser trabeculoplasty (65855) when medical therapy underperforms. Staggers serial OCT/VF."
    }
  },
  {
    "i": "H40.13",
    "n": "Pigmentary glaucoma",
    "c": "Glaucoma",
    "r": "3-4 Mos",
    "s": "401089009",
    "p": [
      "66761",
      "92083",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Pigmentary glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Pigmentary glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Pigmentary glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H40.21",
    "n": "Acute angle-closure attack",
    "c": "Glaucoma",
    "r": "STAT",
    "s": "74004000",
    "p": [
      "66761",
      "92020"
    ],
    "pearl": "Emergency LPI (66761) carries a 10-day CMS global period. Follow-up evaluations within 10 days are included unless distinct complications arise.",
    "pitfall": "Do not dilate. Ensure gonioscopy (92020) documentation explicitly notes closed angle to Schwalbe's line in all 4 quadrants.",
    "min": {
      "f": 184.0,
      "d": "1 emergency visit. Billed as 99215. Topical/oral pressure drops administered; patient sent immediately to external surgery."
    },
    "max": {
      "f": 612.0,
      "d": "Emergency presentation: 99215-25 (High MDM, acute vision threat) + 92020 (Gonioscopy confirmation) + in-office Laser Peripheral Iridotomy (66761-RT/LT). Follow-up day 1 (99213) and week 1 (99213) within global window."
    }
  },
  {
    "i": "H40.03",
    "n": "Anatomical narrow angle suspect",
    "c": "Glaucoma",
    "r": "3 Mos",
    "s": "29938006",
    "p": [
      "66761",
      "92020"
    ],
    "pearl": "Dynamic indentation gonioscopy is required to distinguish appositional closure from permanent synechial closure.",
    "pitfall": "Do not bill prophylactic LPI without documented occlusion risks meeting local coverage determination criteria.",
    "min": {
      "f": 118.0,
      "d": "1 visit/year. 99213 + 92020. Evaluates angle, recommends observation, warns patient regarding anticholinergic OTC medications."
    },
    "max": {
      "f": 496.4,
      "d": "Visit 1: 99214-25 + 92020 (Dynamic indentation gonioscopy shows iridotrabecular contact >180 deg). Escalates to prophylactic LPI (66761). Visit 2: Post-op pressure and patency evaluation."
    }
  },
  {
    "i": "H40.51",
    "n": "Angle recession glaucoma",
    "c": "Glaucoma",
    "r": "3 Mos",
    "s": "27083002",
    "p": [
      "92020",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Angle recession glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Angle recession glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Angle recession glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H40.52",
    "n": "Neovascular Glaucoma",
    "c": "Glaucoma",
    "r": "STAT",
    "s": "69719001",
    "p": [
      "92020",
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Neovascular Glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Neovascular Glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Neovascular Glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H40.53",
    "n": "Uveitic Glaucoma",
    "c": "Glaucoma",
    "r": "1 Wk",
    "s": "313098007",
    "p": [
      "92020",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Uveitic Glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Uveitic Glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Uveitic Glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H40.89",
    "n": "Steroid-induced glaucoma",
    "c": "Glaucoma",
    "r": "2 Wks",
    "s": "24584000",
    "p": [
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Steroid-induced glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Steroid-induced glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Steroid-induced glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H40.01",
    "n": "Open angle suspect, high risk",
    "c": "Glaucoma",
    "r": "6 Mos",
    "s": "192800003",
    "p": [
      "76514",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Open angle suspect, high risk.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Open angle suspect, high risk. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Open angle suspect, high risk. Preserves testing allowances."
    }
  },
  {
    "i": "H40.05",
    "n": "Ocular hypertension",
    "c": "Glaucoma",
    "r": "6 Mos",
    "s": "66547008",
    "p": [
      "76514",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Ocular hypertension.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Ocular hypertension. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Ocular hypertension. Preserves testing allowances."
    }
  },
  {
    "i": "H40.4",
    "n": "Phacolytic Glaucoma",
    "c": "Glaucoma",
    "r": "1 Day",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Phacolytic Glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Phacolytic Glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Phacolytic Glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H40.22",
    "n": "Chronic angle-closure glaucoma",
    "c": "Glaucoma",
    "r": "3 Mos",
    "s": "",
    "p": [
      "66761",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Chronic angle-closure glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Chronic angle-closure glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Chronic angle-closure glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H42",
    "n": "Glaucoma in diseases classified elsewhere",
    "c": "Glaucoma",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Glaucoma in diseases classified elsewhere.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Glaucoma in diseases classified elsewhere. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Glaucoma in diseases classified elsewhere. Preserves testing allowances."
    }
  },
  {
    "i": "H40.6",
    "n": "Glaucoma 2/2 intraocular tumor",
    "c": "Glaucoma",
    "r": "STAT",
    "s": "",
    "p": [
      "76512"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Glaucoma 2/2 intraocular tumor.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Glaucoma 2/2 intraocular tumor. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Glaucoma 2/2 intraocular tumor. Preserves testing allowances."
    }
  },
  {
    "i": "H40.15",
    "n": "Residual stage POAG (End-Stage)",
    "c": "Glaucoma",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92083"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Residual stage POAG (End-Stage).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Residual stage POAG (End-Stage). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Residual stage POAG (End-Stage). Preserves testing allowances."
    }
  },
  {
    "i": "H40.23",
    "n": "Intermittent angle-closure",
    "c": "Glaucoma",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Intermittent angle-closure.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Intermittent angle-closure. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Intermittent angle-closure. Preserves testing allowances."
    }
  },
  {
    "i": "H40.24",
    "n": "Residual angle-closure",
    "c": "Glaucoma",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Residual angle-closure.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Residual angle-closure. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Residual angle-closure. Preserves testing allowances."
    }
  },
  {
    "i": "H40.81",
    "n": "Glaucoma w/ episcleral venous pressure",
    "c": "Glaucoma",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Glaucoma w/ episcleral venous pressure.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Glaucoma w/ episcleral venous pressure. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Glaucoma w/ episcleral venous pressure. Preserves testing allowances."
    }
  },
  {
    "i": "H40.82",
    "n": "Hyperglycemia-induced OHTN",
    "c": "Glaucoma",
    "r": "1 Mo",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Hyperglycemia-induced OHTN.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Hyperglycemia-induced OHTN. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Hyperglycemia-induced OHTN. Preserves testing allowances."
    }
  },
  {
    "i": "H40.83",
    "n": "Malignant Glaucoma (Aqueous Misdirection)",
    "c": "Glaucoma",
    "r": "STAT",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Malignant Glaucoma (Aqueous Misdirection).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Malignant Glaucoma (Aqueous Misdirection). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Malignant Glaucoma (Aqueous Misdirection). Preserves testing allowances."
    }
  },
  {
    "i": "H40.3",
    "n": "Ghost Cell Glaucoma",
    "c": "Glaucoma",
    "r": "1 Wk",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Ghost Cell Glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Ghost Cell Glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Ghost Cell Glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "Q15.0",
    "n": "Congenital Glaucoma",
    "c": "Glaucoma",
    "r": "STAT",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Congenital Glaucoma.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Congenital Glaucoma. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Congenital Glaucoma. Preserves testing allowances."
    }
  },
  {
    "i": "H40.04",
    "n": "Neurovascular angle closure suspect",
    "c": "Glaucoma",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Neurovascular angle closure suspect.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Neurovascular angle closure suspect. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Neurovascular angle closure suspect. Preserves testing allowances."
    }
  },
  {
    "i": "E11.31",
    "n": "DM2 Mild NPDR w/o macular edema",
    "c": "Retina",
    "r": "12 Mos",
    "s": "312903003",
    "p": [
      "92250"
    ],
    "pearl": "Transmit a formal summary letter to the managing PCP or endocrinologist with exact staging to satisfy MIPS Quality Measure #117.",
    "pitfall": "Fundus photography (92250) is inherently bilateral. Never append -RT or -LT, and never bill 2 units.",
    "min": {
      "f": 130.0,
      "d": "1 annual visit. Comprehensive eye exam (92014). Generates annual report to primary care physician."
    },
    "max": {
      "f": 202.4,
      "d": "1 annual visit. 99214 + G2211 (Moderate MDM systemic risk) + 92250 (Bilateral fundus photography to map microaneurysms and establish baseline)."
    }
  },
  {
    "i": "E11.32",
    "n": "DM2 Mild NPDR w/ macular edema",
    "c": "Retina",
    "r": "3 Mos",
    "s": "312904009",
    "p": [
      "92134"
    ],
    "pearl": "OCT macula (92134) is the gold standard for tracking subclinical center-involved macular edema (CI-DME).",
    "pitfall": "Coding macular edema (E11.321 / E11.331) without obtaining objective OCT imaging will fail insurance pre-payment reviews.",
    "min": {
      "f": 172.0,
      "d": "2 visits/year. 99213 at 6-month intervals. Periodic DFE without structural macula OCT tracking."
    },
    "max": {
      "f": 526.8,
      "d": "3 visits/year (Q4M). 99214 + G2211 at all visits. OCT Retina (92134) at Month 0 and Month 6 to quantify central subfield thickness. Baseline fundus photo (92250) at Visit 1."
    }
  },
  {
    "i": "E11.33",
    "n": "DM2 Mod NPDR w/ macular edema",
    "c": "Retina",
    "r": "2 Mos",
    "s": "312906006",
    "p": [
      "92134",
      "92250"
    ],
    "pearl": "OCT macula (92134) is the gold standard for tracking subclinical center-involved macular edema (CI-DME).",
    "pitfall": "Coding macular edema (E11.321 / E11.331) without obtaining objective OCT imaging will fail insurance pre-payment reviews.",
    "min": {
      "f": 172.0,
      "d": "2 visits/year. 99213 at 6-month intervals. Periodic DFE without structural macula OCT tracking."
    },
    "max": {
      "f": 526.8,
      "d": "3 visits/year (Q4M). 99214 + G2211 at all visits. OCT Retina (92134) at Month 0 and Month 6 to quantify central subfield thickness. Baseline fundus photo (92250) at Visit 1."
    }
  },
  {
    "i": "E11.34",
    "n": "DM2 Severe NPDR w/ macular edema",
    "c": "Retina",
    "r": "1 Mo",
    "s": "312908007",
    "p": [
      "92134",
      "92250"
    ],
    "pearl": "Extended ophthalmoscopy (92228) requires an explicit, detailed retinal drawing with labeled quadrants and pathology in the permanent record.",
    "pitfall": "Do not bill 92228 for routine dilation. CMS requires documentation proving standard ophthalmoscopy was insufficient.",
    "min": {
      "f": 184.0,
      "d": "1 visit. High-complexity evaluation (99215). Immediate emergency referral out to vitreo-retinal specialist."
    },
    "max": {
      "f": 948.0,
      "d": "Active retina co-management: 6 visits/year. 99214 + G2211 Q2M. Staggers OCT Macula (92134) and Extended Ophthalmoscopy (92228) with detailed color drawings during anti-VEGF loading phase."
    }
  },
  {
    "i": "E11.35",
    "n": "DM2 PDR w/ macular edema",
    "c": "Retina",
    "r": "STAT",
    "s": "193349004",
    "p": [
      "92134",
      "92228"
    ],
    "pearl": "Extended ophthalmoscopy (92228) requires an explicit, detailed retinal drawing with labeled quadrants and pathology in the permanent record.",
    "pitfall": "Do not bill 92228 for routine dilation. CMS requires documentation proving standard ophthalmoscopy was insufficient.",
    "min": {
      "f": 184.0,
      "d": "1 visit. High-complexity evaluation (99215). Immediate emergency referral out to vitreo-retinal specialist."
    },
    "max": {
      "f": 948.0,
      "d": "Active retina co-management: 6 visits/year. 99214 + G2211 Q2M. Staggers OCT Macula (92134) and Extended Ophthalmoscopy (92228) with detailed color drawings during anti-VEGF loading phase."
    }
  },
  {
    "i": "H35.31",
    "n": "Dry AMD (Nonexudative)",
    "c": "Retina",
    "r": "6-12 Mos",
    "s": "267718000",
    "p": [
      "92134",
      "92250"
    ],
    "pearl": "High-definition OCT line scans through large drusen are critical for detecting early outer retinal atrophy and sub-RPE fluid.",
    "pitfall": "Do not bill 92134 more frequently than every 6 months for stable dry AMD unless the patient presents with acute metamorphopsia.",
    "min": {
      "f": 130.0,
      "d": "1 annual visit. 92014. Provides Amsler grid and recommends over-the-counter AREDS-2 supplements."
    },
    "max": {
      "f": 380.8,
      "d": "2 visits/year (Q6M). 99214 + G2211 at both visits. OCT Macula (92134) twice annually to screen for subretinal fluid or conversion to wet AMD. Baseline photos (92250)."
    }
  },
  {
    "i": "H35.32",
    "n": "Wet AMD (Exudative)",
    "c": "Retina",
    "r": "1 Mo",
    "s": "420050005",
    "p": [
      "92134"
    ],
    "pearl": "Maintain close communication with the treating retina specialist. Cross-referencing visual acuity drops with OCT edema prevents injection delays.",
    "pitfall": "Never report 92250 and 92134 on the same date for wet AMD without distinct medical justification and modifier -59.",
    "min": {
      "f": 184.0,
      "d": "1 urgent visit. Level 5 E/M (99215). Immediate referral to vitreo-retinal practice for intravitreal injection."
    },
    "max": {
      "f": 890.4,
      "d": "Co-management protocol: 6 visits/year. 99214 + G2211 every 2 months between retina specialist injection cycles. Serial OCT macula (92134) monitoring resolution of fluid."
    }
  },
  {
    "i": "H34.81",
    "n": "Central retinal vein occlusion (CRVO)",
    "c": "Retina",
    "r": "1 Mo",
    "s": "65251000",
    "p": [
      "92020",
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Central retinal vein occlusion (CRVO).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Central retinal vein occlusion (CRVO). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Central retinal vein occlusion (CRVO). Preserves testing allowances."
    }
  },
  {
    "i": "H34.83",
    "n": "Branch retinal vein occlusion (BRVO)",
    "c": "Retina",
    "r": "2 Mos",
    "s": "193322009",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Branch retinal vein occlusion (BRVO).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Branch retinal vein occlusion (BRVO). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Branch retinal vein occlusion (BRVO). Preserves testing allowances."
    }
  },
  {
    "i": "H34.11",
    "n": "Central retinal artery occlusion (CRAO)",
    "c": "Retina",
    "r": "STAT 911",
    "s": "20053000",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Central retinal artery occlusion (CRAO).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Central retinal artery occlusion (CRAO). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Central retinal artery occlusion (CRAO). Preserves testing allowances."
    }
  },
  {
    "i": "H34.21",
    "n": "Amaurosis Fugax (Transient Ischemia)",
    "c": "Retina",
    "r": "STAT",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Amaurosis Fugax (Transient Ischemia).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Amaurosis Fugax (Transient Ischemia). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Amaurosis Fugax (Transient Ischemia). Preserves testing allowances."
    }
  },
  {
    "i": "H33.01",
    "n": "Retinal Detachment",
    "c": "Retina",
    "r": "STAT",
    "s": "42059000",
    "p": [
      "76512",
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Retinal Detachment.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Retinal Detachment. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Retinal Detachment. Preserves testing allowances."
    }
  },
  {
    "i": "H33.31",
    "n": "Horseshoe Tear",
    "c": "Retina",
    "r": "1 Day",
    "s": "",
    "p": [
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Horseshoe Tear.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Horseshoe Tear. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Horseshoe Tear. Preserves testing allowances."
    }
  },
  {
    "i": "H33.30",
    "n": "Operculated Hole",
    "c": "Retina",
    "r": "4 Wks",
    "s": "",
    "p": [
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Operculated Hole.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Operculated Hole. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Operculated Hole. Preserves testing allowances."
    }
  },
  {
    "i": "H35.41",
    "n": "Lattice Degeneration",
    "c": "Retina",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Lattice Degeneration.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Lattice Degeneration. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Lattice Degeneration. Preserves testing allowances."
    }
  },
  {
    "i": "H43.81",
    "n": "Vitreous Hemorrhage",
    "c": "Retina",
    "r": "1-3 Days",
    "s": "",
    "p": [
      "76512"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Vitreous Hemorrhage.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Vitreous Hemorrhage. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Vitreous Hemorrhage. Preserves testing allowances."
    }
  },
  {
    "i": "H43.39",
    "n": "Posterior Vitreous Detachment (PVD)",
    "c": "Retina",
    "r": "4 Wks",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Posterior Vitreous Detachment (PVD).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Posterior Vitreous Detachment (PVD). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Posterior Vitreous Detachment (PVD). Preserves testing allowances."
    }
  },
  {
    "i": "H35.03",
    "n": "Hypertensive Retinopathy",
    "c": "Retina",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Hypertensive Retinopathy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Hypertensive Retinopathy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Hypertensive Retinopathy. Preserves testing allowances."
    }
  },
  {
    "i": "H35.81",
    "n": "Cystoid Macular Edema (CME)",
    "c": "Retina",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Cystoid Macular Edema (CME).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Cystoid Macular Edema (CME). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Cystoid Macular Edema (CME). Preserves testing allowances."
    }
  },
  {
    "i": "H35.37",
    "n": "Epiretinal Membrane (ERM)",
    "c": "Retina",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Epiretinal Membrane (ERM).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Epiretinal Membrane (ERM). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Epiretinal Membrane (ERM). Preserves testing allowances."
    }
  },
  {
    "i": "H35.34",
    "n": "Macular Hole (Full-Thickness)",
    "c": "Retina",
    "r": "2 Wks",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Macular Hole (Full-Thickness).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Macular Hole (Full-Thickness). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Macular Hole (Full-Thickness). Preserves testing allowances."
    }
  },
  {
    "i": "H35.35",
    "n": "Vitreomacular Traction (VMT)",
    "c": "Retina",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Vitreomacular Traction (VMT).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Vitreomacular Traction (VMT). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Vitreomacular Traction (VMT). Preserves testing allowances."
    }
  },
  {
    "i": "H35.71",
    "n": "Central Serous Chorioretinopathy (CSCR)",
    "c": "Retina",
    "r": "6 Wks",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Central Serous Chorioretinopathy (CSCR).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Central Serous Chorioretinopathy (CSCR). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Central Serous Chorioretinopathy (CSCR). Preserves testing allowances."
    }
  },
  {
    "i": "H31.10",
    "n": "Choroidal Nevus",
    "c": "Retina",
    "r": "12 Mos",
    "s": "",
    "p": [
      "76512",
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Choroidal Nevus.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Choroidal Nevus. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Choroidal Nevus. Preserves testing allowances."
    }
  },
  {
    "i": "H35.52",
    "n": "Retinitis Pigmentosa",
    "c": "Retina",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92083",
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Retinitis Pigmentosa.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Retinitis Pigmentosa. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Retinitis Pigmentosa. Preserves testing allowances."
    }
  },
  {
    "i": "H35.36",
    "n": "Macular Drusen",
    "c": "Retina",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Macular Drusen.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Macular Drusen. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Macular Drusen. Preserves testing allowances."
    }
  },
  {
    "i": "H35.05",
    "n": "Neovascularization (Non-DM)",
    "c": "Retina",
    "r": "1 Wk",
    "s": "",
    "p": [
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Neovascularization (Non-DM).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Neovascularization (Non-DM). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Neovascularization (Non-DM). Preserves testing allowances."
    }
  },
  {
    "i": "H35.02",
    "n": "Exudative retinopathy (Coats)",
    "c": "Retina",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Exudative retinopathy (Coats).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Exudative retinopathy (Coats). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Exudative retinopathy (Coats). Preserves testing allowances."
    }
  },
  {
    "i": "H31.8",
    "n": "Angioid Streaks",
    "c": "Retina",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Angioid Streaks.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Angioid Streaks. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Angioid Streaks. Preserves testing allowances."
    }
  },
  {
    "i": "H31.3",
    "n": "Choroidal Rupture",
    "c": "Retina",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92134",
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Choroidal Rupture.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Choroidal Rupture. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Choroidal Rupture. Preserves testing allowances."
    }
  },
  {
    "i": "H35.6",
    "n": "Commotio Retinae",
    "c": "Retina",
    "r": "1 Wk",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Commotio Retinae.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Commotio Retinae. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Commotio Retinae. Preserves testing allowances."
    }
  },
  {
    "i": "H35.54",
    "n": "Purtscher Retinopathy",
    "c": "Retina",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Purtscher Retinopathy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Purtscher Retinopathy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Purtscher Retinopathy. Preserves testing allowances."
    }
  },
  {
    "i": "H35.61",
    "n": "Valsalva Retinopathy",
    "c": "Retina",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Valsalva Retinopathy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Valsalva Retinopathy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Valsalva Retinopathy. Preserves testing allowances."
    }
  },
  {
    "i": "H35.53",
    "n": "Sickle Cell Retinopathy",
    "c": "Retina",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Sickle Cell Retinopathy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Sickle Cell Retinopathy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Sickle Cell Retinopathy. Preserves testing allowances."
    }
  },
  {
    "i": "H35.82",
    "n": "Macular Ischemia",
    "c": "Retina",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Macular Ischemia.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Macular Ischemia. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Macular Ischemia. Preserves testing allowances."
    }
  },
  {
    "i": "H33.1",
    "n": "Retinoschisis",
    "c": "Retina",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Retinoschisis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Retinoschisis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Retinoschisis. Preserves testing allowances."
    }
  },
  {
    "i": "H35.38",
    "n": "Macular Pseudohole",
    "c": "Retina",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Macular Pseudohole.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Macular Pseudohole. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Macular Pseudohole. Preserves testing allowances."
    }
  },
  {
    "i": "H35.04",
    "n": "Microaneurysms",
    "c": "Retina",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Microaneurysms.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Microaneurysms. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Microaneurysms. Preserves testing allowances."
    }
  },
  {
    "i": "H35.06",
    "n": "Retinal Vasculitis",
    "c": "Retina",
    "r": "1 Wk",
    "s": "",
    "p": [
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Retinal Vasculitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Retinal Vasculitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Retinal Vasculitis. Preserves testing allowances."
    }
  },
  {
    "i": "H31.0",
    "n": "Chorioretinal Scars",
    "c": "Retina",
    "r": "12 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Chorioretinal Scars.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Chorioretinal Scars. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Chorioretinal Scars. Preserves testing allowances."
    }
  },
  {
    "i": "H35.72",
    "n": "Serous RPE Detachment (PED)",
    "c": "Retina",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Serous RPE Detachment (PED).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Serous RPE Detachment (PED). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Serous RPE Detachment (PED). Preserves testing allowances."
    }
  },
  {
    "i": "H31.4",
    "n": "Choroidal Detachment",
    "c": "Retina",
    "r": "1 Wk",
    "s": "",
    "p": [
      "76512"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Choroidal Detachment.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Choroidal Detachment. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Choroidal Detachment. Preserves testing allowances."
    }
  },
  {
    "i": "H04.12",
    "n": "Severe Dry Eye (Sjogrens/OSD)",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "371404000",
    "p": [
      "68761"
    ],
    "pearl": "Punctal occlusion requires documented failure of conservative lubrication therapy (minimum 30-90 days) to withstand commercial audits.",
    "pitfall": "Always use eyelid modifiers (-E1, -E2, -E3, -E4) with 68761. Never bill bilateral modifier -50 on punctal plugs.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213. Recommends over-the-counter artificial tears and warm compresses."
    },
    "max": {
      "f": 1143.0,
      "d": "4 visits/year. Visit 1: 99214 + G2211 (Initiate immunomodulator drops). Visit 2 (Month 1): 99214-25 + 68761-E2 + 68761-E4-51 (Punctal occlusion). Visit 3 (Month 3): 99214-25 + 65778-RT (Amniotic membrane). Visit 4: 99213 follow-up."
    }
  },
  {
    "i": "H18.89",
    "n": "Recurrent Corneal Erosion (RCE)",
    "c": "Cornea & OSD",
    "r": "1 Wk",
    "s": "",
    "p": [
      "65435",
      "92071"
    ],
    "pearl": "When placing a bandage contact lens for therapeutic pain relief and re-epithelialization, bill 92071 with -RT or -LT.",
    "pitfall": "Material supply code (99070 or V2599) is frequently bundled into 92071 by commercial medical payers. Check Local Medical Policy.",
    "min": {
      "f": 92.0,
      "d": "1 visit. 99213. Prescribes topical hypertonic sodium chloride drops and ointment."
    },
    "max": {
      "f": 507.0,
      "d": "4 visits over 6 weeks. Visit 1: 99214-25 + 92071 (Bandage contact lens placed). Visit 2 (Day 3): 99213 (BCL check). Visit 3 (Week 3): 99214-25 + 65435 (Epithelial debridement of loose margins). Visit 4: 99213 (Resolution check)."
    }
  },
  {
    "i": "T15.01",
    "n": "Corneal Foreign Body",
    "c": "Cornea & OSD",
    "r": "24 Hrs",
    "s": "191428003",
    "p": [
      "65222",
      "92071"
    ],
    "pearl": "Document the exact corneal depth (stromal vs epithelial), rust ring presence, and post-removal Seidel test result in your operative note.",
    "pitfall": "Do not bill modifier -25 unless your record clearly documents an evaluation that goes beyond the standard pre-procedure workup.",
    "min": {
      "f": 68.0,
      "d": "1 procedural visit. Billed solely as 65222-RT/LT without an E/M code."
    },
    "max": {
      "f": 292.0,
      "d": "Visit 1: 99214-25 (Significant separate evaluation of anterior segment/anterior chamber) + 65222-RT (Slit lamp FB removal with burr rust removal) + 92071 (Therapeutic BCL). Visit 2 (24h): 99213 (Seidel test, BCL removal)."
    }
  },
  {
    "i": "S05.01",
    "n": "Corneal Abrasion",
    "c": "Cornea & OSD",
    "r": "24 Hrs",
    "s": "",
    "p": [
      "65778",
      "92071"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Corneal Abrasion.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Corneal Abrasion. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Corneal Abrasion. Preserves testing allowances."
    }
  },
  {
    "i": "H16.00",
    "n": "Bacterial Corneal Ulcer",
    "c": "Cornea & OSD",
    "r": "24 Hrs",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Bacterial Corneal Ulcer.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Bacterial Corneal Ulcer. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Bacterial Corneal Ulcer. Preserves testing allowances."
    }
  },
  {
    "i": "B00.52",
    "n": "HSV Dendritic Keratitis",
    "c": "Cornea & OSD",
    "r": "2 Days",
    "s": "",
    "p": [
      "65435"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing HSV Dendritic Keratitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for HSV Dendritic Keratitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of HSV Dendritic Keratitis. Preserves testing allowances."
    }
  },
  {
    "i": "B02.32",
    "n": "HZO Keratitis",
    "c": "Cornea & OSD",
    "r": "3 Days",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing HZO Keratitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for HZO Keratitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of HZO Keratitis. Preserves testing allowances."
    }
  },
  {
    "i": "H16.12",
    "n": "Filamentary Keratitis",
    "c": "Cornea & OSD",
    "r": "2 Wks",
    "s": "",
    "p": [
      "65435",
      "92071"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Filamentary Keratitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Filamentary Keratitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Filamentary Keratitis. Preserves testing allowances."
    }
  },
  {
    "i": "H18.42",
    "n": "Band Keratopathy",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [
      "65435"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Band Keratopathy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Band Keratopathy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Band Keratopathy. Preserves testing allowances."
    }
  },
  {
    "i": "H18.51",
    "n": "Fuchs' Endothelial Dystrophy",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [
      "76514"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Fuchs' Endothelial Dystrophy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Fuchs' Endothelial Dystrophy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Fuchs' Endothelial Dystrophy. Preserves testing allowances."
    }
  },
  {
    "i": "H18.60",
    "n": "Keratoconus",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92072"
    ],
    "pearl": "Use CPT 92072 for keratoconus fittings. Routine contact lens fitting codes (92310) will be denied under medical policies.",
    "pitfall": "Tracking progressive thinning is required before referring for Corneal Collagen Cross-Linking (CXL - CPT 0402T).",
    "min": {
      "f": 175.0,
      "d": "1 visit/year. 92014 + 92025 (Corneal topography). Recommends standard gas permeable lenses."
    },
    "max": {
      "f": 622.0,
      "d": "Visit 1: 99214 + 92025 (Topography progression check) + 76514 (Pachymetry for corneal thinning). Visit 2: 92072 (Specialty contact lens fitting for keratoconus). Materials billed to DME as V2599-KX."
    }
  },
  {
    "i": "H18.46",
    "n": "Marginal Keratitis (Staph)",
    "c": "Cornea & OSD",
    "r": "5 Days",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Marginal Keratitis (Staph).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Marginal Keratitis (Staph). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Marginal Keratitis (Staph). Preserves testing allowances."
    }
  },
  {
    "i": "H18.13",
    "n": "Pseudophakic Bullous Keratopathy",
    "c": "Cornea & OSD",
    "r": "1 Mo",
    "s": "",
    "p": [
      "65778",
      "92071"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Pseudophakic Bullous Keratopathy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Pseudophakic Bullous Keratopathy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Pseudophakic Bullous Keratopathy. Preserves testing allowances."
    }
  },
  {
    "i": "H02.05",
    "n": "Trichiasis",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "",
    "p": [
      "67820"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Trichiasis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Trichiasis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Trichiasis. Preserves testing allowances."
    }
  },
  {
    "i": "H02.83",
    "n": "Dermatochalasis",
    "c": "Cornea & OSD",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92083",
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Dermatochalasis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Dermatochalasis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Dermatochalasis. Preserves testing allowances."
    }
  },
  {
    "i": "H02.88",
    "n": "Meibomian Gland Dysfunction",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Meibomian Gland Dysfunction.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Meibomian Gland Dysfunction. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Meibomian Gland Dysfunction. Preserves testing allowances."
    }
  },
  {
    "i": "H00.11",
    "n": "Chalazion",
    "c": "Cornea & OSD",
    "r": "6 Wks",
    "s": "",
    "p": [
      "11900"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Chalazion.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Chalazion. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Chalazion. Preserves testing allowances."
    }
  },
  {
    "i": "H10.89",
    "n": "Epidemic Keratoconjunctivitis (EKC)",
    "c": "Cornea & OSD",
    "r": "1 Wk",
    "s": "",
    "p": [
      "65435"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Epidemic Keratoconjunctivitis (EKC).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Epidemic Keratoconjunctivitis (EKC). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Epidemic Keratoconjunctivitis (EKC). Preserves testing allowances."
    }
  },
  {
    "i": "H11.00",
    "n": "Pterygium",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Pterygium.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Pterygium. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Pterygium. Preserves testing allowances."
    }
  },
  {
    "i": "H15.00",
    "n": "Scleritis",
    "c": "Cornea & OSD",
    "r": "1 Day",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Scleritis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Scleritis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Scleritis. Preserves testing allowances."
    }
  },
  {
    "i": "H16.14",
    "n": "UV Keratitis (Welder's Flash)",
    "c": "Cornea & OSD",
    "r": "24 Hrs",
    "s": "",
    "p": [
      "92071"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing UV Keratitis (Welder's Flash).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for UV Keratitis (Welder's Flash). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of UV Keratitis (Welder's Flash). Preserves testing allowances."
    }
  },
  {
    "i": "H18.52",
    "n": "Granular Corneal Dystrophy",
    "c": "Cornea & OSD",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Granular Corneal Dystrophy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Granular Corneal Dystrophy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Granular Corneal Dystrophy. Preserves testing allowances."
    }
  },
  {
    "i": "H18.54",
    "n": "Lattice Corneal Dystrophy",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92071"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Lattice Corneal Dystrophy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Lattice Corneal Dystrophy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Lattice Corneal Dystrophy. Preserves testing allowances."
    }
  },
  {
    "i": "H18.55",
    "n": "Macular Corneal Dystrophy",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [
      "76514"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Macular Corneal Dystrophy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Macular Corneal Dystrophy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Macular Corneal Dystrophy. Preserves testing allowances."
    }
  },
  {
    "i": "H18.59",
    "n": "EBMD (Map-Dot-Fingerprint)",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing EBMD (Map-Dot-Fingerprint).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for EBMD (Map-Dot-Fingerprint). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of EBMD (Map-Dot-Fingerprint). Preserves testing allowances."
    }
  },
  {
    "i": "H02.10",
    "n": "Ectropion",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Ectropion.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Ectropion. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Ectropion. Preserves testing allowances."
    }
  },
  {
    "i": "H02.00",
    "n": "Entropion",
    "c": "Cornea & OSD",
    "r": "4 Wks",
    "s": "",
    "p": [
      "92071"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Entropion.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Entropion. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Entropion. Preserves testing allowances."
    }
  },
  {
    "i": "H02.40",
    "n": "Ptosis",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92083"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Ptosis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Ptosis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Ptosis. Preserves testing allowances."
    }
  },
  {
    "i": "H01.00",
    "n": "Blepharitis",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Blepharitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Blepharitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Blepharitis. Preserves testing allowances."
    }
  },
  {
    "i": "H00.01",
    "n": "Hordeolum",
    "c": "Cornea & OSD",
    "r": "1 Wk",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Hordeolum.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Hordeolum. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Hordeolum. Preserves testing allowances."
    }
  },
  {
    "i": "H10.02",
    "n": "Bacterial Conjunctivitis",
    "c": "Cornea & OSD",
    "r": "1 Wk",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Bacterial Conjunctivitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Bacterial Conjunctivitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Bacterial Conjunctivitis. Preserves testing allowances."
    }
  },
  {
    "i": "H10.13",
    "n": "Allergic Conjunctivitis",
    "c": "Cornea & OSD",
    "r": "4 Wks",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Allergic Conjunctivitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Allergic Conjunctivitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Allergic Conjunctivitis. Preserves testing allowances."
    }
  },
  {
    "i": "H10.45",
    "n": "Giant Papillary Conjunctivitis (GPC)",
    "c": "Cornea & OSD",
    "r": "4 Wks",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Giant Papillary Conjunctivitis (GPC).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Giant Papillary Conjunctivitis (GPC). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Giant Papillary Conjunctivitis (GPC). Preserves testing allowances."
    }
  },
  {
    "i": "H11.15",
    "n": "Pinguecula",
    "c": "Cornea & OSD",
    "r": "12 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Pinguecula.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Pinguecula. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Pinguecula. Preserves testing allowances."
    }
  },
  {
    "i": "H11.31",
    "n": "Subconjunctival Hemorrhage",
    "c": "Cornea & OSD",
    "r": "3 Wks",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Subconjunctival Hemorrhage.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Subconjunctival Hemorrhage. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Subconjunctival Hemorrhage. Preserves testing allowances."
    }
  },
  {
    "i": "H15.10",
    "n": "Episcleritis",
    "c": "Cornea & OSD",
    "r": "2 Wks",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Episcleritis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Episcleritis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Episcleritis. Preserves testing allowances."
    }
  },
  {
    "i": "H16.21",
    "n": "Mooren's Ulcer",
    "c": "Cornea & OSD",
    "r": "STAT",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Mooren's Ulcer.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Mooren's Ulcer. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Mooren's Ulcer. Preserves testing allowances."
    }
  },
  {
    "i": "H18.49",
    "n": "Salzmann Nodular Degeneration",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [
      "65435"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Salzmann Nodular Degeneration.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Salzmann Nodular Degeneration. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Salzmann Nodular Degeneration. Preserves testing allowances."
    }
  },
  {
    "i": "B60.1",
    "n": "Acanthamoeba Keratitis",
    "c": "Cornea & OSD",
    "r": "Daily",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Acanthamoeba Keratitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Acanthamoeba Keratitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Acanthamoeba Keratitis. Preserves testing allowances."
    }
  },
  {
    "i": "B36.9",
    "n": "Fungal Keratitis",
    "c": "Cornea & OSD",
    "r": "Daily",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Fungal Keratitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Fungal Keratitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Fungal Keratitis. Preserves testing allowances."
    }
  },
  {
    "i": "H16.29",
    "n": "Superior Limbic Keratoconjunctivitis (SLK)",
    "c": "Cornea & OSD",
    "r": "2 Wks",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Superior Limbic Keratoconjunctivitis (SLK).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Superior Limbic Keratoconjunctivitis (SLK). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Superior Limbic Keratoconjunctivitis (SLK). Preserves testing allowances."
    }
  },
  {
    "i": "H02.89",
    "n": "Floppy Eyelid Syndrome",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Floppy Eyelid Syndrome.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Floppy Eyelid Syndrome. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Floppy Eyelid Syndrome. Preserves testing allowances."
    }
  },
  {
    "i": "D48.5",
    "n": "Sebaceous Gland CA Suspect",
    "c": "Cornea & OSD",
    "r": "STAT",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Sebaceous Gland CA Suspect.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Sebaceous Gland CA Suspect. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Sebaceous Gland CA Suspect. Preserves testing allowances."
    }
  },
  {
    "i": "H11.2",
    "n": "Conjunctival Concretions",
    "c": "Cornea & OSD",
    "r": "PRN",
    "s": "",
    "p": [
      "65205"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Conjunctival Concretions.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Conjunctival Concretions. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Conjunctival Concretions. Preserves testing allowances."
    }
  },
  {
    "i": "H04.2",
    "n": "Nasolacrimal Duct Obstruction",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "",
    "p": [
      "68840"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Nasolacrimal Duct Obstruction.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Nasolacrimal Duct Obstruction. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Nasolacrimal Duct Obstruction. Preserves testing allowances."
    }
  },
  {
    "i": "H05.0",
    "n": "Preseptal Cellulitis",
    "c": "Cornea & OSD",
    "r": "2 Days",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Preseptal Cellulitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Preseptal Cellulitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Preseptal Cellulitis. Preserves testing allowances."
    }
  },
  {
    "i": "H20.01",
    "n": "Acute Anterior Uveitis (Iridocyclitis)",
    "c": "Uveitis",
    "r": "2 Days",
    "s": "",
    "p": [
      "92020",
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Acute Anterior Uveitis (Iridocyclitis).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Acute Anterior Uveitis (Iridocyclitis). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Acute Anterior Uveitis (Iridocyclitis). Preserves testing allowances."
    }
  },
  {
    "i": "H20.02",
    "n": "Recurrent Uveitis",
    "c": "Uveitis",
    "r": "2 Days",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Recurrent Uveitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Recurrent Uveitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Recurrent Uveitis. Preserves testing allowances."
    }
  },
  {
    "i": "H20.9",
    "n": "Uveitis w/ Posterior Synechiae",
    "c": "Uveitis",
    "r": "1 Day",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Uveitis w/ Posterior Synechiae.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Uveitis w/ Posterior Synechiae. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Uveitis w/ Posterior Synechiae. Preserves testing allowances."
    }
  },
  {
    "i": "H30.00",
    "n": "Toxoplasmosis Chorioretinitis",
    "c": "Uveitis",
    "r": "1 Wk",
    "s": "",
    "p": [
      "92134",
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Toxoplasmosis Chorioretinitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Toxoplasmosis Chorioretinitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Toxoplasmosis Chorioretinitis. Preserves testing allowances."
    }
  },
  {
    "i": "H30.10",
    "n": "Ocular Histoplasmosis (POHS)",
    "c": "Uveitis",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92134",
      "92250"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Ocular Histoplasmosis (POHS).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Ocular Histoplasmosis (POHS). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Ocular Histoplasmosis (POHS). Preserves testing allowances."
    }
  },
  {
    "i": "H30.23",
    "n": "Pars Planitis",
    "c": "Uveitis",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92134",
      "92228"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Pars Planitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Pars Planitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Pars Planitis. Preserves testing allowances."
    }
  },
  {
    "i": "A51.4",
    "n": "Syphilitic Uveitis",
    "c": "Uveitis",
    "r": "STAT",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Syphilitic Uveitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Syphilitic Uveitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Syphilitic Uveitis. Preserves testing allowances."
    }
  },
  {
    "i": "D86.8",
    "n": "Sarcoid Uveitis",
    "c": "Uveitis",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Sarcoid Uveitis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Sarcoid Uveitis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Sarcoid Uveitis. Preserves testing allowances."
    }
  },
  {
    "i": "H20.8",
    "n": "VKH Syndrome",
    "c": "Uveitis",
    "r": "STAT",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing VKH Syndrome.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for VKH Syndrome. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of VKH Syndrome. Preserves testing allowances."
    }
  },
  {
    "i": "H30.8",
    "n": "Birdshot Chorioretinopathy",
    "c": "Uveitis",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92083"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Birdshot Chorioretinopathy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Birdshot Chorioretinopathy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Birdshot Chorioretinopathy. Preserves testing allowances."
    }
  },
  {
    "i": "H20.0",
    "n": "Posner-Schlossman Syndrome",
    "c": "Uveitis",
    "r": "2 Days",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Posner-Schlossman Syndrome.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Posner-Schlossman Syndrome. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Posner-Schlossman Syndrome. Preserves testing allowances."
    }
  },
  {
    "i": "H46.9",
    "n": "Optic Neuritis",
    "c": "Neuro",
    "r": "STAT",
    "s": "",
    "p": [
      "92083",
      "92133"
    ],
    "pearl": "In typical acute optic neuritis, the optic nerve head appears normal in two-thirds of cases (retrobulbar presentation).",
    "pitfall": "Never prescribe oral prednisone alone without IV methylprednisolone per the Optic Neuritis Treatment Trial (ONTT).",
    "min": {
      "f": 184.0,
      "d": "1 emergency evaluation. Billed as 99215 (High MDM). Immediate referral to neurology / hospital emergency room."
    },
    "max": {
      "f": 423.0,
      "d": "Day 1: 99215 + 92133 (Baseline OCT RNFL) + 92083 (Threshold VF demonstrating central/cecocentral scotoma). STAT MRI referral. Month 1 Follow-up: 99214 (Tracking recovery and steroid response)."
    }
  },
  {
    "i": "H47.01",
    "n": "NAION",
    "c": "Neuro",
    "r": "1 Wk",
    "s": "",
    "p": [
      "92083",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing NAION.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for NAION. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of NAION. Preserves testing allowances."
    }
  },
  {
    "i": "H47.02",
    "n": "Giant Cell Arteritis (AION)",
    "c": "Neuro",
    "r": "STAT",
    "s": "",
    "p": [
      "92083"
    ],
    "pearl": "GCA is a true ophthalmic emergency. Immediate ESR, CRP, and Platelet count testing is mandatory to prevent fellow eye blindness.",
    "pitfall": "Do not delay systemic steroid administration while waiting for temporal artery biopsy scheduling.",
    "min": {
      "f": 184.0,
      "d": "1 emergency encounter. 99215. Recommends urgent ESR/CRP blood work and temporal artery biopsy."
    },
    "max": {
      "f": 314.0,
      "d": "STAT encounter: 99215 + 92083 (Documenting altitudinal defect). Same-day direct coordination with emergency room or rheumatology for immediate high-dose intravenous corticosteroid therapy."
    }
  },
  {
    "i": "H47.11",
    "n": "Papilledema (IIH)",
    "c": "Neuro",
    "r": "Urgent",
    "s": "",
    "p": [
      "92083",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Papilledema (IIH).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Papilledema (IIH). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Papilledema (IIH). Preserves testing allowances."
    }
  },
  {
    "i": "H47.32",
    "n": "Optic Disc Drusen",
    "c": "Neuro",
    "r": "6 Mos",
    "s": "",
    "p": [
      "76512",
      "92083"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Optic Disc Drusen.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Optic Disc Drusen. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Optic Disc Drusen. Preserves testing allowances."
    }
  },
  {
    "i": "H49.01",
    "n": "Third Nerve Palsy",
    "c": "Neuro",
    "r": "STAT",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Third Nerve Palsy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Third Nerve Palsy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Third Nerve Palsy. Preserves testing allowances."
    }
  },
  {
    "i": "H49.11",
    "n": "Fourth Nerve Palsy",
    "c": "Neuro",
    "r": "2 Wks",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Fourth Nerve Palsy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Fourth Nerve Palsy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Fourth Nerve Palsy. Preserves testing allowances."
    }
  },
  {
    "i": "H49.21",
    "n": "Sixth Nerve Palsy",
    "c": "Neuro",
    "r": "2 Wks",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Sixth Nerve Palsy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Sixth Nerve Palsy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Sixth Nerve Palsy. Preserves testing allowances."
    }
  },
  {
    "i": "G70.00",
    "n": "Ocular Myasthenia Gravis",
    "c": "Neuro",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92060",
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Ocular Myasthenia Gravis.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Ocular Myasthenia Gravis. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Ocular Myasthenia Gravis. Preserves testing allowances."
    }
  },
  {
    "i": "H57.02",
    "n": "Horner's Syndrome",
    "c": "Neuro",
    "r": "STAT",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Horner's Syndrome.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Horner's Syndrome. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Horner's Syndrome. Preserves testing allowances."
    }
  },
  {
    "i": "H57.04",
    "n": "Adie's Tonic Pupil",
    "c": "Neuro",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Adie's Tonic Pupil.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Adie's Tonic Pupil. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Adie's Tonic Pupil. Preserves testing allowances."
    }
  },
  {
    "i": "H51.23",
    "n": "Internuclear Ophthalmoplegia (INO)",
    "c": "Neuro",
    "r": "Urgent",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Internuclear Ophthalmoplegia (INO).",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Internuclear Ophthalmoplegia (INO). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Internuclear Ophthalmoplegia (INO). Preserves testing allowances."
    }
  },
  {
    "i": "H05.24",
    "n": "Thyroid Eye Disease (Graves')",
    "c": "Neuro",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92083",
      "92133",
      "92285"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Thyroid Eye Disease (Graves').",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Thyroid Eye Disease (Graves'). No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Thyroid Eye Disease (Graves'). Preserves testing allowances."
    }
  },
  {
    "i": "H47.20",
    "n": "Optic Atrophy",
    "c": "Neuro",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92083",
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Optic Atrophy.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Optic Atrophy. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Optic Atrophy. Preserves testing allowances."
    }
  },
  {
    "i": "H53.46",
    "n": "Homonymous Hemianopia",
    "c": "Neuro",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92083"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Homonymous Hemianopia.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Homonymous Hemianopia. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Homonymous Hemianopia. Preserves testing allowances."
    }
  },
  {
    "i": "Q14.2",
    "n": "Morning Glory Syndrome",
    "c": "Neuro",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92134"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Morning Glory Syndrome.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Morning Glory Syndrome. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Morning Glory Syndrome. Preserves testing allowances."
    }
  },
  {
    "i": "H47.21",
    "n": "LHON",
    "c": "Neuro",
    "r": "1 Mo",
    "s": "",
    "p": [
      "92133"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing LHON.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for LHON. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of LHON. Preserves testing allowances."
    }
  },
  {
    "i": "H46.8",
    "n": "Papillitis",
    "c": "Neuro",
    "r": "Urgent",
    "s": "",
    "p": [
      "92133"
    ],
    "pearl": "In typical acute optic neuritis, the optic nerve head appears normal in two-thirds of cases (retrobulbar presentation).",
    "pitfall": "Never prescribe oral prednisone alone without IV methylprednisolone per the Optic Neuritis Treatment Trial (ONTT).",
    "min": {
      "f": 184.0,
      "d": "1 emergency evaluation. Billed as 99215 (High MDM). Immediate referral to neurology / hospital emergency room."
    },
    "max": {
      "f": 423.0,
      "d": "Day 1: 99215 + 92133 (Baseline OCT RNFL) + 92083 (Threshold VF demonstrating central/cecocentral scotoma). STAT MRI referral. Month 1 Follow-up: 99214 (Tracking recovery and steroid response)."
    }
  },
  {
    "i": "Z79.89",
    "n": "Plaquenil Toxicity Screen",
    "c": "High-Risk Rx",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92083",
      "92134"
    ],
    "pearl": "Per AAO guidelines, cumulative dose >1000g, daily dose >5.0 mg/kg, duration >5 years, and renal disease increase toxicity risk.",
    "pitfall": "Do not rely on fundus photography (92250) for Plaquenil screening. CMS and AAO require OCT and 10-2 automated visual fields.",
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine eye code 92014 with basic dilated fundus exam. Omits objective toxicity imaging."
    },
    "max": {
      "f": 239.0,
      "d": "1 annual surveillance visit: 99214 (Medical decision making for high-risk drug toxicity monitoring) + 92134 (SD-OCT Macula screening for flying saucer sign) + 92083 (10-2 automated visual field; 24-2 or 30-2 in Asian patients)."
    }
  },
  {
    "i": "Z79.82",
    "n": "Aspirin/Anticoagulant Use",
    "c": "High-Risk Rx",
    "r": "PRN",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Aspirin/Anticoagulant Use.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Aspirin/Anticoagulant Use. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Aspirin/Anticoagulant Use. Preserves testing allowances."
    }
  },
  {
    "i": "T43.01",
    "n": "TCA Anticholinergic Toxicity",
    "c": "High-Risk Rx",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92020"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing TCA Anticholinergic Toxicity.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for TCA Anticholinergic Toxicity. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of TCA Anticholinergic Toxicity. Preserves testing allowances."
    }
  },
  {
    "i": "H53.00",
    "n": "Amblyopia",
    "c": "Peds",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92015",
      "92060",
      "92065"
    ],
    "pearl": "Sensorimotor examination (92060) is an inherently bilateral service requiring quantitative prism deviation testing.",
    "pitfall": "Refraction (92015) is statutorily non-covered by Medicare Part B. Always append modifier -GY to route properly to secondary vision plans.",
    "min": {
      "f": 130.0,
      "d": "1 visit/year. 92014. Prescribes manifest refractive correction. Lacks structured occlusion therapy or binocular follow-up."
    },
    "max": {
      "f": 887.0,
      "d": "6 visits/year. Visit 1: 99214 + 92015-GY (Wet cycloplegic refraction) + 92060 (Sensorimotor exam). Visits 2-6 (Every 4-6 weeks): 99213 (Occlusion tracking) + 92065 (Orthoptics / Vision Therapy sessions)."
    }
  },
  {
    "i": "H50.01",
    "n": "Accommodative Esotropia",
    "c": "Peds",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92015",
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Accommodative Esotropia.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Accommodative Esotropia. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Accommodative Esotropia. Preserves testing allowances."
    }
  },
  {
    "i": "H50.11",
    "n": "Intermittent Exotropia",
    "c": "Peds",
    "r": "4 Mos",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Intermittent Exotropia.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Intermittent Exotropia. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Intermittent Exotropia. Preserves testing allowances."
    }
  },
  {
    "i": "H51.11",
    "n": "Convergence Insufficiency",
    "c": "Peds",
    "r": "8 Wks",
    "s": "",
    "p": [
      "92060",
      "92065"
    ],
    "pearl": "The Convergence Insufficiency Treatment Trial (CITT) established office-based vision therapy with home reinforcement as the clinical standard.",
    "pitfall": "Many commercial payers require prior authorization for 92065 and limit total lifetime therapy units. Check payer bulletins.",
    "min": {
      "f": 90.0,
      "d": "1 visit/year. Billed as 92012. Recommends base-in reading prisms without office-based active therapy."
    },
    "max": {
      "f": 732.0,
      "d": "Intensive treatment protocol: Visit 1: 99214 + 92060 (Diagnostic sensorimotor workup). Visits 2-7: 92065 (Office-based active vision therapy training in 45-minute blocks per CITT protocols)."
    }
  },
  {
    "i": "H51.12",
    "n": "Convergence Excess",
    "c": "Peds",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Convergence Excess.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Convergence Excess. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Convergence Excess. Preserves testing allowances."
    }
  },
  {
    "i": "H52.53",
    "n": "Accommodative Spasm",
    "c": "Peds",
    "r": "4 Wks",
    "s": "",
    "p": [
      "92015"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Accommodative Spasm.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Accommodative Spasm. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Accommodative Spasm. Preserves testing allowances."
    }
  },
  {
    "i": "H50.81",
    "n": "Duane Syndrome",
    "c": "Peds",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Duane Syndrome.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Duane Syndrome. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Duane Syndrome. Preserves testing allowances."
    }
  },
  {
    "i": "H50.89",
    "n": "Brown Syndrome",
    "c": "Peds",
    "r": "6 Mos",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Brown Syndrome.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Brown Syndrome. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Brown Syndrome. Preserves testing allowances."
    }
  },
  {
    "i": "H52.51",
    "n": "Accommodative Insufficiency",
    "c": "Peds",
    "r": "3 Mos",
    "s": "",
    "p": [
      "92060"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Accommodative Insufficiency.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Accommodative Insufficiency. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Accommodative Insufficiency. Preserves testing allowances."
    }
  },
  {
    "i": "Z96.1",
    "n": "Pseudophakia Post-Op (Cataract Co-Management)",
    "c": "Cataract",
    "r": "1 Day",
    "s": "",
    "p": [],
    "pearl": "Always document the exact date transfer of care was formally assumed and relinquished in Box 19 of the CMS-1500 claim.",
    "pitfall": "Do not bill separate E/M codes during the 90-day global surgical period unless evaluating a completely unrelated condition (with modifier -24).",
    "min": {
      "f": 92.0,
      "d": "1 visit at post-op month 1. Standard E/M 99213. Fails to assume global surgical co-management."
    },
    "max": {
      "f": 285.0,
      "d": "Surgical co-management assumed. Bill 66984-55 (or 66982-55 for complex cataract) with transfer of care beginning Post-Op Day 1. OD retains 20% of the surgical global fee."
    }
  },
  {
    "i": "H25.13",
    "n": "Nuclear Sclerotic Cataract",
    "c": "Cataract",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Nuclear Sclerotic Cataract.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Nuclear Sclerotic Cataract. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Nuclear Sclerotic Cataract. Preserves testing allowances."
    }
  },
  {
    "i": "H25.01",
    "n": "Cortical Cataract",
    "c": "Cataract",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Cortical Cataract.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Cortical Cataract. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Cortical Cataract. Preserves testing allowances."
    }
  },
  {
    "i": "H26.49",
    "n": "Posterior Capsular Opacification",
    "c": "Cataract",
    "r": "1 Mo",
    "s": "",
    "p": [
      "66821"
    ],
    "pearl": "Document specific functional complaints (e.g., night driving glare, inability to read fine print) and glare visual acuity before YAG intervention.",
    "pitfall": "YAG capsulotomy (66821) carries a 90-day CMS global period. Follow-up checks within 90 days are not separately reimbursable.",
    "min": {
      "f": 90.0,
      "d": "1 visit. 92012. Observes posterior capsular haze, notes glare symptoms, schedules return in 6 months."
    },
    "max": {
      "f": 377.0,
      "d": "Visit 1: 99214 (Documenting visual impairment affecting activities of daily living, glare testing, slit lamp photo). Escalates to YAG Capsulotomy (66821-RT/LT) with 90-day surgical global management."
    }
  },
  {
    "i": "H26.33",
    "n": "Steroid PSC Cataract",
    "c": "Cataract",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Steroid PSC Cataract.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Steroid PSC Cataract. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Steroid PSC Cataract. Preserves testing allowances."
    }
  },
  {
    "i": "H52.13",
    "n": "Myopia",
    "c": "Refractive",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92015"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Myopia.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Myopia. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Myopia. Preserves testing allowances."
    }
  },
  {
    "i": "H52.03",
    "n": "Hyperopia",
    "c": "Refractive",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92015"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Hyperopia.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Hyperopia. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Hyperopia. Preserves testing allowances."
    }
  },
  {
    "i": "H52.22",
    "n": "Astigmatism",
    "c": "Refractive",
    "r": "12 Mos",
    "s": "",
    "p": [
      "92015"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Astigmatism.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Astigmatism. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Astigmatism. Preserves testing allowances."
    }
  },
  {
    "i": "H52.4",
    "n": "Presbyopia",
    "c": "Refractive",
    "r": "24 Mos",
    "s": "",
    "p": [
      "92015"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Presbyopia.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Presbyopia. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Presbyopia. Preserves testing allowances."
    }
  },
  {
    "i": "H54.8",
    "n": "Legal Blindness / Low Vision",
    "c": "Refractive",
    "r": "3 Mos",
    "s": "",
    "p": [
      "97530"
    ],
    "pearl": "Align E/M leveling with documented MDM complexity when managing Legal Blindness / Low Vision.",
    "pitfall": "Billing routine diagnostic codes without medical necessity justification triggers immediate audit clawbacks.",
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Standard low-complexity evaluation (99213) for Legal Blindness / Low Vision. No specialized imaging or proactive medical management performed."
    },
    "max": {
      "f": 264.0,
      "d": "2 visits/year. Billed as 99214 + G2211 based on active monitoring of Legal Blindness / Low Vision. Preserves testing allowances."
    }
  }
];
