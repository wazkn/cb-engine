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
    "min": {
      "f": 259.0,
      "d": "2 visits/year. Defaults to routine eye codes (92014/92012). Clumps OCT (92133) and VF (92083) on the same day, immediately exhausting the Medicare 6-month frequency cap. Ignores the G2211 longitudinal add-on."
    },
    "max": {
      "f": 703.6,
      "d": "4 visits/year (Q3Mos). Levels E/M via MDM for Rx management (99214). Appends G2211 to all 4 encounters. Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to respect LCD frequency rules while maximizing imaging surveillance. Includes annual Gonioscopy (92020) at Visit 1."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
    }
  },
  {
    "i": "H40.82",
    "n": "Hyperglycemia-induced OHTN",
    "c": "Glaucoma",
    "r": "1 Mo",
    "s": "",
    "p": [],
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
    }
  },
  {
    "i": "Q15.0",
    "n": "Congenital Glaucoma",
    "c": "Glaucoma",
    "r": "STAT",
    "s": "",
    "p": [],
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 807.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 262.0,
      "d": "2 visits/year. Billed under 92014 and 92012. Lumps baseline imaging into Visit 1. Exhausts LCD frequency caps early; omits G2211 longitudinal complexity."
    },
    "max": {
      "f": 835.6,
      "d": "4 visits/year (Quarterly). All visits leveled via MDM Rx management (99214 + G2211). Staggers OCT (Visits 1 & 3) and VF (Visits 2 & 4) to remain within 6-month LCD limits. Includes periodic gonioscopic inspection."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 186.0,
      "d": "1 visit/year. Bills comprehensive eye code (92014) and a baseline fundus photo (92250). Refers immediately to retina and does not actively co-manage the systemic condition."
    },
    "max": {
      "f": 2184.0,
      "d": "12 visits/year (Monthly surveillance/co-management during anti-VEGF loading). Levels 99214 + G2211 monthly. Alternates OCT Macula (92134) to track subretinal fluid and Extended Ophthalmoscopy (92228) to map advancing neovascularization."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 731.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
    }
  },
  {
    "i": "H31.0",
    "n": "Chorioretinal Scars",
    "c": "Retina",
    "r": "12 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Routine monitoring billed via comprehensive eye code 92014. No proactive multi-interval staging or co-management."
    },
    "max": {
      "f": 677.6,
      "d": "4 visits/year. Leveled at 99214 + G2211 based on active disease progression risk. OCT Macula (92134) repeated compliant with 6-month rules, cross-referenced with serial imaging."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Levels at 99213. Recommends over-the-counter artificial tears and warm compresses. No procedural intervention."
    },
    "max": {
      "f": 1143.0,
      "d": "4 visits/year. Visit 1: 99214 + G2211 (Initiate Restasis/Xiidra). Visit 2 (Month 1): 99214-25 + 68761-E2 + 68761-E4-51 (Silicone plugs in lower puncta after confirming drop failure). Visit 3 (Month 3): 99214-25 + 65778-RT (Prokera placement for severe keratitis). Visit 4 (Month 4): 99213 (Prokera removal/check)."
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
    "min": {
      "f": 92.0,
      "d": "1 visit. Bills 99213, prescribes hypertonic ointment, and discharges."
    },
    "max": {
      "f": 507.0,
      "d": "4 visits over 6 weeks. Visit 1: 99214-25 + 92071 (Bandage CL placed for acute pain/defect). Visit 2 (Day 3): 99213 (BCL removal/check). Visit 3 (Week 3): 99214-25 + 65435 (Epithelial debridement of loose margins). Visit 4 (Week 6): 99213 (Resolution check)."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 434.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 434.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 434.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H18.46",
    "n": "Marginal Keratitis (Staph)",
    "c": "Cornea & OSD",
    "r": "5 Days",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 434.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H11.00",
    "n": "Pterygium",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 434.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 434.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H18.59",
    "n": "EBMD (Map-Dot-Fingerprint)",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H02.10",
    "n": "Ectropion",
    "c": "Cornea & OSD",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 434.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H01.00",
    "n": "Blepharitis",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H00.01",
    "n": "Hordeolum",
    "c": "Cornea & OSD",
    "r": "1 Wk",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H10.02",
    "n": "Bacterial Conjunctivitis",
    "c": "Cornea & OSD",
    "r": "1 Wk",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H10.13",
    "n": "Allergic Conjunctivitis",
    "c": "Cornea & OSD",
    "r": "4 Wks",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H10.45",
    "n": "Giant Papillary Conjunctivitis (GPC)",
    "c": "Cornea & OSD",
    "r": "4 Wks",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H11.15",
    "n": "Pinguecula",
    "c": "Cornea & OSD",
    "r": "12 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H11.31",
    "n": "Subconjunctival Hemorrhage",
    "c": "Cornea & OSD",
    "r": "3 Wks",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H15.10",
    "n": "Episcleritis",
    "c": "Cornea & OSD",
    "r": "2 Wks",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H16.21",
    "n": "Mooren's Ulcer",
    "c": "Cornea & OSD",
    "r": "STAT",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "B60.1",
    "n": "Acanthamoeba Keratitis",
    "c": "Cornea & OSD",
    "r": "Daily",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "B36.9",
    "n": "Fungal Keratitis",
    "c": "Cornea & OSD",
    "r": "Daily",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H16.29",
    "n": "Superior Limbic Keratoconjunctivitis (SLK)",
    "c": "Cornea & OSD",
    "r": "2 Wks",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H02.89",
    "n": "Floppy Eyelid Syndrome",
    "c": "Cornea & OSD",
    "r": "3 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "D48.5",
    "n": "Sebaceous Gland CA Suspect",
    "c": "Cornea & OSD",
    "r": "STAT",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
    }
  },
  {
    "i": "H05.0",
    "n": "Preseptal Cellulitis",
    "c": "Cornea & OSD",
    "r": "2 Days",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit/year. Billed as 99213 (low complexity). Conservative lubrication recommended; no escalation to punctal occlusion, amniotic membrane, or prescription immunomodulators."
    },
    "max": {
      "f": 396.0,
      "d": "3 visits/year. Visit 1 initiates targeted therapeutics (99214). Subsequent visits add indicated in-office procedures with modifier -25 (e.g., punctal plugs or therapeutic lenses) following documented failure of conservative therapy."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
    }
  },
  {
    "i": "A51.4",
    "n": "Syphilitic Uveitis",
    "c": "Uveitis",
    "r": "STAT",
    "s": "",
    "p": [],
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Standard eye code evaluation; immediate uncoordinated referral out."
    },
    "max": {
      "f": 291.0,
      "d": "Acute diagnostic encounter. Level 5 MDM (99215) for threat to vision/neurological integrity. Same-day objective testing (OCT RNFL + threshold visual field) completed prior to emergency neuro-imaging."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Bills 92014. Performs basic DFE but skips baseline objective testing."
    },
    "max": {
      "f": 239.0,
      "d": "1 visit/year. Bills 99214 (Managing high-risk medication toxicity) + 92134 (OCT Macula for flying saucer sign) + 92083 (10-2 Visual Field). G2211 is generally excluded here unless you are actively treating a secondary chronic condition."
    }
  },
  {
    "i": "Z79.82",
    "n": "Aspirin/Anticoagulant Use",
    "c": "High-Risk Rx",
    "r": "PRN",
    "s": "",
    "p": [],
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "1 visit/year. Bills 92014 and prescribes glasses. No active sensorimotor tracking or vision therapy."
    },
    "max": {
      "f": 887.0,
      "d": "6 visits/year. Visit 1: 99214 + 92015-GY (Wet cycloplegic refraction) + 92060 (Sensorimotor exam to establish baseline suppression). Visits 2-6 (Every 4-6 weeks): 99213 (Patching compliance checks) + 92065 (Orthoptics/Vision Therapy training)."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
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
    "min": {
      "f": 130.0,
      "d": "Annual pediatric evaluation (92014). Corrective lenses updated without sensorimotor workup."
    },
    "max": {
      "f": 623.0,
      "d": "Active binocular rehabilitation. Initial visit includes comprehensive sensorimotor evaluation (92060). Followed by compliance and orthoptic training/vision therapy sessions (92065) across alternating cycles."
    }
  },
  {
    "i": "Z96.1",
    "n": "Pseudophakia Post-Op (Cataract Co-Management)",
    "c": "Cataract",
    "r": "1 Day",
    "s": "",
    "p": [],
    "min": {
      "f": 92.0,
      "d": "1 visit at 1 month. Bills standard 99213. Misses out on global fee splitting entirely."
    },
    "max": {
      "f": 285.0,
      "d": "Assume 90-day global co-management. OD assumes care (66984-55) starting on Post-Op Day 1 for both eyes (staggered by 2-4 weeks). OD collects exactly 20% of the surgeon's Medicare allowable for both eyes without needing to justify E/M codes or MDM levels."
    }
  },
  {
    "i": "H25.13",
    "n": "Nuclear Sclerotic Cataract",
    "c": "Cataract",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 130.0,
      "d": "Annual cataract progression monitoring billed as 92014."
    },
    "max": {
      "f": 285.0,
      "d": "Full surgical co-management assumed. Care transferred on Post-Op Day 1 with modifier -55 (66984-55). Covers the remaining duration of the CMS 90-day surgical global window."
    }
  },
  {
    "i": "H25.01",
    "n": "Cortical Cataract",
    "c": "Cataract",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 130.0,
      "d": "Annual cataract progression monitoring billed as 92014."
    },
    "max": {
      "f": 285.0,
      "d": "Full surgical co-management assumed. Care transferred on Post-Op Day 1 with modifier -55 (66984-55). Covers the remaining duration of the CMS 90-day surgical global window."
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
    "min": {
      "f": 130.0,
      "d": "Annual cataract progression monitoring billed as 92014."
    },
    "max": {
      "f": 285.0,
      "d": "Full surgical co-management assumed. Care transferred on Post-Op Day 1 with modifier -55 (66984-55). Covers the remaining duration of the CMS 90-day surgical global window."
    }
  },
  {
    "i": "H26.33",
    "n": "Steroid PSC Cataract",
    "c": "Cataract",
    "r": "6 Mos",
    "s": "",
    "p": [],
    "min": {
      "f": 130.0,
      "d": "Annual cataract progression monitoring billed as 92014."
    },
    "max": {
      "f": 285.0,
      "d": "Full surgical co-management assumed. Care transferred on Post-Op Day 1 with modifier -55 (66984-55). Covers the remaining duration of the CMS 90-day surgical global window."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
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
    "min": {
      "f": 130.0,
      "d": "Routine examination and refractive evaluation."
    },
    "max": {
      "f": 172.0,
      "d": "Medical evaluation for systemic risk/pathology (99214) with non-covered refraction carved out and billed directly to patient or secondary vision carrier with modifier -GY."
    }
  }
];
