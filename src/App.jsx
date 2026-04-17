import { useState } from "react";

const COUNTIES = {
  "Banks County": {
    note: "Source: Banks County Zoning Ordinance & Residential Construction Packet. ARR and R-1 data confirmed from official county documents. CAD data limited. Verify with Banks County Planning at (706) 677-6204.",
    districts: [
      { code: "CAD", density: "\u2014" },
      { code: "ARR", density: "1/lot" },
      { code: "R-1", density: "1/lot" },
      { code: "R-2", density: "2/lot" },
      { code: "R-3", density: "4/ac" },
      { code: "C-1", density: "\u2014" },
      { code: "C-2", density: "\u2014" },
      { code: "M-1", density: "\u2014" },
      { code: "M-2", density: "\u2014" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Standard", values: ["20 ac", "2 ac", "2 ac", "1 ac", "0.5 ac", "1 ac", "1 ac", "1 ac", "2 ac"], unit: "AC" },
        ],
      },
      {
        title: "Minimum Lot Width",
        rows: [
          { label: "Width at Setback", values: ["200", "150", "150", "100", "80", "100", "100", "100", "150"], unit: "FT" },
        ],
      },
      {
        title: "Minimum Floor Area",
        rows: [
          { label: "Dwelling Floor Area", values: ["\u2014", "1,000", "2,000", "900", "600", "\u2014", "\u2014", "\u2014", "\u2014"], unit: "SF" },
          { label: "R-1 Main Floor Min", values: ["\u2014", "\u2014", "1,500", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014"], unit: "SF" },
        ],
      },
      {
        title: "Max Height",
        rows: [
          { label: "Max Height", values: ["35", "35", "35", "35", "45", "35", "45", "45", "60"], unit: "FT" },
        ],
      },
      {
        title: "Front Yard Setback",
        rows: [
          { label: "From Road Center", values: ["70", "70", "70", "60", "50", "60", "60", "60", "60"], unit: "FT" },
        ],
      },
      {
        title: "Side Yard Setback",
        rows: [
          { label: "Side (each)", values: ["30", "30", "30", "15", "10", "15", "15", "20", "30"], unit: "FT" },
        ],
      },
      {
        title: "Rear Yard Setback",
        rows: [
          { label: "Rear", values: ["30", "30", "30", "25", "25", "25", "25", "30", "30"], unit: "FT" },
        ],
      },
    ],
    definitions: [
      { term: "CAD", text: "Conservation/Agricultural District. 20 ac min. If land not actively used for intensive ag or falls below 20 ac, county may initiate rezoning review." },
      { term: "ARR", text: "Agriculture/Rural Residential. 2 ac minimum. Cannot be subdivided below 2 ac." },
      { term: "R-1", text: "Single-Family Residential. 2,000 SF min dwelling (1,500 on main floor). Min 2 ac for Class IV subdivision, min 5 ac for Class II/III." },
      { term: "R-2", text: "Two-Family Residential (Duplex)." },
      { term: "R-3", text: "Multi-Family Residential." },
      { term: "C-1", text: "Neighborhood Commercial." },
      { term: "C-2", text: "General Commercial." },
      { term: "M-1", text: "Light Industrial/Manufacturing." },
      { term: "M-2", text: "Heavy Industrial/Manufacturing." },
    ],
  },
  "Hall County": {
    districts: [
      { code: "AG-1", density: "2 units/lot" },
      { code: "AR-1", density: "1 unit/lot" },
      { code: "VC", density: "1 unit/lot" },
      { code: "R1-L", density: "1 unit/lot" },
      { code: "R1", density: "1 unit/lot" },
      { code: "R-TF", density: "2 units/lot" },
      { code: "R-X", density: "\u2014" },
      { code: "CS", density: "8/ac" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Private System", values: ["\u2014", "\u2014", "21,780", "\u2014", "21,780", "\u2014", "\u2014", "\u2014"], unit: "SF" },
          { label: "Public Water / Septic", values: ["\u2014", "43,560", "\u2014", "43,560", "\u2014", "\u2014", "\u2014", "\u2014"], unit: "SF" },
          { label: "Full Public Utilities / Min", values: ["5 ac", "65,340", "35,000", "65,340", "35,000", "35,000", "30,000", "\u2014"], unit: "SF" },
        ],
      },
      {
        title: "Minimum Lot Frontage",
        rows: [
          { label: "Frontage (Feet)", values: ["50", "50", "50", "50", "50", "50", "50", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Minimum Floor Area",
        rows: [
          { label: "Dwelling Floor Area", values: ["256", "256", "256", "256", "256", "256", "256", "256"], unit: "SF" },
          { label: "Min Width", values: ["16", "16", "16", "16", "16", "16", "16", "16"], unit: "FT" },
        ],
      },
      {
        title: "Max Height of Building or Structure",
        rows: [
          { label: "Max Height", values: ["35", "35", "35", "35", "35", "35", "35", "35"], unit: "FT" },
        ],
      },
      {
        title: "Front Yard Setback",
        rows: [
          { label: "Arterial Road", values: ["60", "60", "60", "60", "60", "60", "60", "60"], unit: "FT" },
          { label: "Collector Road", values: ["45", "45", "45", "45", "45", "45", "45", "45"], unit: "FT" },
          { label: "Local Road", values: ["30", "30", "30", "30", "30", "30", "30", "30"], unit: "FT" },
        ],
      },
      {
        title: "Side Yard Setback",
        rows: [
          { label: "Side (Feet)", values: ["10", "10", "10", "10", "10", "10", "10", "10"], unit: "FT" },
        ],
      },
      {
        title: "Rear Yard Setback",
        rows: [
          { label: "Rear (Feet)", values: ["25", "25", "25", "25", "25", "25", "25", "25"], unit: "FT" },
        ],
      },
    ],
    definitions: [
      { term: "AG-1", text: "Agricultural District. Low-density agricultural and residential." },
      { term: "AR-1", text: "Agricultural-Residential. Transitional rural-residential." },
      { term: "VC", text: "Village Commercial. Neighborhood-scale mixed use." },
      { term: "R1-L", text: "Residential Single-Family (Large Lot)." },
      { term: "R1", text: "Residential Single-Family." },
      { term: "R-TF", text: "Residential Two-Family (Duplex)." },
      { term: "R-X", text: "Residential Mixed. Multi-family and townhomes." },
      { term: "CS", text: "Community Service district." },
    ],
  },
  "Jackson County": {
    note: "Source: Jackson County UDC Table 2-2 & Health Dept Lot Size Ordinance. Some values derived from code text. Verify with Planning & Zoning at (706) 367-6348.",
    districts: [
      { code: "PCFD", density: "\u2014" },
      { code: "A-1", density: "1/lot" },
      { code: "A-2", density: "1/lot" },
      { code: "A-3", density: "1/lot" },
      { code: "AR", density: "1/lot" },
      { code: "R-1", density: "1/lot" },
      { code: "R-2", density: "2/lot" },
      { code: "R-3", density: "8/ac" },
      { code: "MH", density: "6/ac" },
      { code: "B-1", density: "\u2014" },
      { code: "B-2", density: "\u2014" },
      { code: "LI", density: "\u2014" },
      { code: "HI", density: "\u2014" },
      { code: "OI", density: "\u2014" },
      { code: "PD", density: "Varies" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Public Water + Sewer", values: ["10 ac", "3 ac", "1.5 ac", "0.75 ac", "0.75 ac", "0.6 ac", "0.6 ac", "0.6 ac", "0.6 ac", "0.6 ac", "0.6 ac", "1 ac", "1 ac", "0.6 ac", "Varies"], unit: "AC" },
          { label: "Public Water / No Sewer", values: ["\u2014", "\u2014", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "\u2014", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "Varies"], unit: "AC" },
          { label: "Private Well / Septic", values: ["\u2014", "\u2014", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014"], unit: "AC" },
        ],
      },
      {
        title: "Minimum Lot Width",
        rows: [
          { label: "Public Water + Sewer", values: ["300", "210", "150", "100", "100", "80", "80", "80", "60", "100", "100", "100", "100", "100", "Varies"], unit: "FT" },
          { label: "Public Water / No Sewer", values: ["\u2014", "\u2014", "150", "150", "150", "125", "125", "\u2014", "125", "125", "125", "125", "125", "125", "Varies"], unit: "FT" },
          { label: "Private Well / Septic", values: ["\u2014", "\u2014", "200", "200", "200", "200", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Max Height",
        rows: [
          { label: "Max Height", values: ["35", "35", "35", "35", "35", "35", "35", "45", "35", "45", "45", "45", "60", "35", "Varies"], unit: "FT" },
        ],
      },
      {
        title: "Front Yard Setback",
        rows: [
          { label: "Arterial", values: ["100", "100", "60", "60", "60", "40", "40", "40", "40", "60", "60", "60", "60", "60", "Varies"], unit: "FT" },
          { label: "Collector", values: ["80", "80", "50", "50", "50", "35", "35", "35", "35", "50", "50", "50", "50", "50", "Varies"], unit: "FT" },
          { label: "Local", values: ["60", "60", "40", "40", "40", "25", "25", "25", "25", "40", "40", "40", "40", "40", "Varies"], unit: "FT" },
        ],
      },
      {
        title: "Side Yard Setback",
        rows: [
          { label: "Side (each)", values: ["20", "20", "15", "10", "10", "10", "10", "10", "10", "15", "15", "20", "20", "10", "Varies"], unit: "FT" },
        ],
      },
      {
        title: "Rear Yard Setback",
        rows: [
          { label: "Rear", values: ["50", "50", "30", "25", "25", "25", "25", "25", "25", "30", "30", "30", "30", "25", "Varies"], unit: "FT" },
        ],
      },
      {
        title: "Buffers (Adjacent Residential)",
        rows: [
          { label: "Buffer Width", values: ["\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "20", "\u2014", "20", "25", "30", "50", "10", "Varies"], unit: "FT" },
        ],
      },
    ],
    definitions: [
      { term: "PCFD", text: "Prime Commercial Farmland District. Large-scale agricultural preservation." },
      { term: "A-1", text: "Agricultural District. Farming and very low density residential." },
      { term: "A-2", text: "Agricultural-Residential. Farming with moderate lot residential." },
      { term: "A-3", text: "Rural Residential. Smaller ag lots transitioning to residential." },
      { term: "AR", text: "Agricultural-Residential. Similar to A-3 with slightly different standards." },
      { term: "R-1", text: "Single-Family Residential." },
      { term: "R-2", text: "Two-Family Residential (Duplex)." },
      { term: "R-3", text: "Multi-Family Residential." },
      { term: "MH", text: "Manufactured Home district." },
      { term: "B-1", text: "Neighborhood Business." },
      { term: "B-2", text: "General Business." },
      { term: "LI", text: "Light Industrial." },
      { term: "HI", text: "Heavy Industrial." },
      { term: "OI", text: "Office-Institutional." },
      { term: "PD", text: "Planned Development. Flexible mixed-use overlay." },
      { term: "8-Acre Split (A-2)", text: "Lots 8+ ac in A-2 may be split into 1.5 ac residential lots. Max 4 lots per parent tract. Must have public water or approved well." },
      { term: "Minor Subdivision: 5-Lot Split", text: "Division of land into 5 or fewer lots, each meeting minimum district lot area, fronting a public street, and conforming to the Development Code." },
      { term: "Minor Subdivision: Large Lot (min 25 acres)", text: "Division of land into lots of 25+ acres each, fronting a public street and conforming to the Development Code." },
    ],
  },
  "Oconee County": {
    districts: [
      { code: "AG", density: "\u2014" },
      { code: "AR", density: "1/lot" },
      { code: "R-1", density: "1/lot" },
      { code: "R-2", density: "2/lot" },
      { code: "R-3", density: "4/ac" },
      { code: "B-1", density: "\u2014" },
      { code: "B-2", density: "\u2014" },
      { code: "B-3", density: "\u2014" },
      { code: "I-1", density: "\u2014" },
      { code: "I-2", density: "\u2014" },
      { code: "OIP", density: "\u2014" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Septic", values: ["2 ac", "2 ac", "30,000", "30,000", "15,000", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014"], unit: "SF" },
          { label: "Public Sewer", values: ["2 ac", "1 ac", "15,000", "12,000", "8,000", "15,000", "20,000", "20,000", "1 ac", "1 ac", "20,000"], unit: "SF" },
        ],
      },
      {
        title: "Minimum Lot Width",
        rows: [
          { label: "Width (Feet)", values: ["200", "150", "100", "85", "60", "100", "100", "100", "150", "150", "100"], unit: "FT" },
        ],
      },
      {
        title: "Max Height",
        rows: [
          { label: "Max Height", values: ["35", "35", "35", "35", "45", "35", "45", "60", "45", "60", "45"], unit: "FT" },
        ],
      },
      {
        title: "Front Yard Setback",
        rows: [
          { label: "Arterial", values: ["60", "60", "40", "40", "40", "40", "60", "60", "60", "60", "40"], unit: "FT" },
          { label: "Collector", values: ["50", "50", "35", "35", "35", "35", "50", "50", "50", "50", "35"], unit: "FT" },
          { label: "Local", values: ["30", "30", "25", "25", "25", "25", "30", "30", "30", "30", "25"], unit: "FT" },
        ],
      },
      {
        title: "Side Yard Setback",
        rows: [
          { label: "Side (each)", values: ["20", "15", "10", "8", "5", "10", "15", "15", "20", "20", "10"], unit: "FT" },
        ],
      },
      {
        title: "Rear Yard Setback",
        rows: [
          { label: "Rear", values: ["30", "30", "20", "20", "20", "20", "20", "25", "30", "30", "20"], unit: "FT" },
        ],
      },
    ],
    definitions: [
      { term: "AG", text: "Agricultural District. Large-lot farming and rural preservation." },
      { term: "AR", text: "Agricultural-Residential. Transitional rural-residential." },
      { term: "R-1", text: "Single-Family Residential." },
      { term: "R-2", text: "Two-Family Residential." },
      { term: "R-3", text: "Multi-Family Residential." },
      { term: "B-1", text: "Neighborhood Business." },
      { term: "B-2", text: "Highway Business." },
      { term: "B-3", text: "General Business." },
      { term: "I-1", text: "Light Industrial." },
      { term: "I-2", text: "Heavy Industrial." },
      { term: "OIP", text: "Office-Institutional-Professional." },
    ],
  },
  "Oglethorpe County": {
    note: "Source: Oglethorpe County Unified Development Code (2018). PG district has no private spatial requirements (government use only). PD requirements vary by underlying district, approved via site plan. SP is an overlay district with max 50% lot coverage and 35 ft height. Verify with Oglethorpe County Planning at (706) 743-5270.",
    districts: [
      { code: "A-1", density: "1/30ac" },
      { code: "A-2", density: "1/lot" },
      { code: "AR", density: "1/lot" },
      { code: "R-1", density: "1/lot" },
      { code: "R-2", density: "2/lot" },
      { code: "R-3", density: "Varies" },
      { code: "B-1", density: "\u2014" },
      { code: "B-2", density: "\u2014" },
      { code: "B-3", density: "\u2014" },
      { code: "OIP", density: "\u2014" },
      { code: "LI", density: "\u2014" },
      { code: "HI", density: "\u2014" },
      { code: "PG", density: "N/A" },
      { code: "PD", density: "Varies" },
      { code: "SP", density: "Varies" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Well + Septic", values: ["30 ac / 1.5 ac", "10 ac / 1.5 ac", "5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "N/A", "Varies", "5 ac"], unit: "" },
          { label: "Public Water + Septic", values: ["\u2014", "\u2014", "\u2014", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "1.5 ac", "N/A", "Varies", "\u2014"], unit: "" },
          { label: "Public Water + Sewer", values: ["\u2014", "\u2014", "\u2014", "0.5 ac", "0.5 ac", "0.5 ac", "0.5 ac", "0.5 ac", "0.5 ac", "0.5 ac", "0.5 ac", "1.0 ac", "N/A", "Varies", "\u2014"], unit: "" },
        ],
      },
      {
        title: "Minimum Lot Width",
        rows: [
          { label: "Well + Septic", values: ["400", "400 / 200", "200", "200", "200", "200", "200", "200", "200", "200", "200", "200", "N/A", "Varies", "400"], unit: "FT" },
          { label: "Public Water + Septic", values: ["\u2014", "\u2014", "\u2014", "125", "125", "125", "125", "125", "125", "125", "125", "125", "N/A", "Varies", "\u2014"], unit: "FT" },
          { label: "Public Water + Sewer", values: ["\u2014", "\u2014", "\u2014", "100", "100", "100", "100", "100", "100", "100", "100", "125", "N/A", "Varies", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Min Floor Area (SF dwelling)",
        rows: [
          { label: "SF Dwelling", values: ["900", "900", "900", "900", "900", "900", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "Varies", "\u2014"], unit: "SF" },
          { label: "Two-Family (principal)", values: ["\u2014", "\u2014", "\u2014", "\u2014", "900/450", "900/450", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "Varies", "\u2014"], unit: "SF" },
          { label: "Duplex (per unit)", values: ["\u2014", "\u2014", "\u2014", "\u2014", "600", "600", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "Varies", "\u2014"], unit: "SF" },
          { label: "Multi-Family (per unit)", values: ["\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "450", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "Varies", "\u2014"], unit: "SF" },
        ],
      },
      {
        title: "Max Height",
        rows: [
          { label: "Principal Building", values: ["35", "35", "35", "35", "35", "45", "35", "45", "45", "45", "45", "45", "N/A", "Varies", "35"], unit: "FT" },
          { label: "Accessory Structure", values: ["\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "35", "35", "\u2014", "N/A", "Varies", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Front Yard Setback",
        rows: [
          { label: "Arterial (from R/W)", values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "N/A", "Varies", "\u2014"], unit: "FT" },
          { label: "Arterial (no R/W, from CL)", values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "N/A", "Varies", "\u2014"], unit: "FT" },
          { label: "Collector (from R/W)", values: ["50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "N/A", "Varies", "\u2014"], unit: "FT" },
          { label: "Collector (no R/W, from CL)", values: ["80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "80", "N/A", "Varies", "\u2014"], unit: "FT" },
          { label: "Local/Private (from R/W)", values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "N/A", "Varies", "\u2014"], unit: "FT" },
          { label: "Local/Private (no R/W, from CL)", values: ["50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "N/A", "Varies", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Side Yard Setback",
        rows: [
          { label: "Side (each)", values: ["20", "20", "20", "10", "20", "20+buf", "20+buf", "20+buf", "20+buf", "20+buf", "20+buf", "20+buf", "N/A", "Varies", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Rear Yard Setback",
        rows: [
          { label: "Rear", values: ["20", "20", "20", "10", "20", "20+buf", "20+buf", "20+buf", "20+buf", "20+buf", "20+buf", "20+buf", "N/A", "Varies", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Max Lot Coverage / Building Separation",
        rows: [
          { label: "Max Lot Coverage", values: ["\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "60%", "70%", "75%", "80%", "75/60%", "75%", "80%", "N/A", "Varies", "50%"], unit: "" },
          { label: "Min Building Separation", values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "N/A", "Varies", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "Buffers (R-3 adjacent to R-1/R-2)",
        rows: [
          { label: "Buffer Width", values: ["\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "20", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "Varies", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "R-3 MF Density (per dwelling unit)",
        rows: [
          { label: "MF Lot Area per Unit", values: ["\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "10,000 sf", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "Varies", "\u2014"], unit: "" },
        ],
      },
      {
        title: "Street Frontage",
        rows: [
          { label: "Min Frontage", values: ["50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "N/A", "Varies+50", "\u2014"], unit: "FT" },
        ],
      },
      {
        title: "A-1 Special Use Setbacks",
        rows: [
          { label: "Livestock Pavilion (side/rear)", values: ["100", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "\u2014", "\u2014"], unit: "FT" },
          { label: "Livestock Pavilion (adj. residence)", values: ["400", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "\u2014", "\u2014"], unit: "FT" },
          { label: "Ag Retail (side/rear)", values: ["100", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "\u2014", "\u2014"], unit: "FT" },
          { label: "Ag Retail (adj. residence)", values: ["200", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "\u2014", "\u2014"], unit: "FT" },
          { label: "Slaughterhouse (side/rear)", values: ["300", "300", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "\u2014", "\u2014"], unit: "FT" },
          { label: "Slaughterhouse (adj. residence)", values: ["500", "500", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "\u2014", "N/A", "\u2014", "\u2014"], unit: "FT" },
        ],
      },
    ],
    definitions: [
      { term: "A-1", text: "Intensive Agricultural District. Animal containment (poultry, swine, dairy, livestock). 30 ac min for animal operations, 400 ft width. SF dwelling allowed at 1.5 ac/200 ft. Legacy setbacks apply to pre-Sept 2015 A-1; stricter setbacks for post-Sept 2015 rezonings." },
      { term: "A-2", text: "General Agricultural District. Food/fiber crops, timber, horticulture, livestock pastures, limited containment. 10 ac min for principal ag use, 1.5 ac for SF dwelling." },
      { term: "AR", text: "Agricultural/Rural Residential. Low-density rural residential, small-scale ag, horses. 5 ac min, 200 ft width. No commercial accessory structures." },
      { term: "R-1", text: "Single-Family Residential. Must be on paved public roads with public water/sewer access. 0.5 ac min with full utilities; 1.5 ac if septic." },
      { term: "R-2", text: "Two-Family Residential. SF or duplex. Must be on paved public roads with public water/sewer. 0.5 ac per dwelling unit." },
      { term: "R-3", text: "Multi-Family Residential. SF, duplex, apartments, townhouses, manufactured housing parks. Must have public water/sewer. MF at 10,000 sf per unit, 200 ft width. 20 ft buffer adjacent to R-1/R-2. Max 60% lot coverage, 45 ft height. +5 ft setback per story above 2." },
      { term: "B-1", text: "Local Business. Small neighborhood commercial (max 3,500 sf per establishment). Must abut paved collector street. Buffers required adjacent to residential." },
      { term: "B-2", text: "Highway Business. Limited commercial along arterials. Max 40,000 sf (conditional use above). 45 ft height. 75% max lot coverage." },
      { term: "B-3", text: "General Business. Full-range commercial at major intersections. Max 40,000 sf (conditional use above). 45 ft height. 80% max lot coverage." },
      { term: "OIP", text: "Office/Institutional/Professional. Offices, clinics, institutions, limited retail. Must be on paved collector/arterial. 45 ft height. Max coverage 75% (arterial) or 60% (collector)." },
      { term: "LI", text: "Light Industrial. Manufacturing, warehousing, trade shops. All operations within enclosed building. 45 ft height. 75% max lot coverage." },
      { term: "HI", text: "Heavy Industrial. Intensive manufacturing, processing, quarries. Not near residential/scenic areas. 1.0 ac min with public sewer (vs 0.5 ac for other districts). 45 ft height. 80% max lot coverage." },
      { term: "PG", text: "Public/Government. Land owned/operated by federal, state, county, or city government. No private spatial requirements. If sold to private party, must be rezoned." },
      { term: "PD", text: "Planned Development. Overlay on residential, commercial, or industrial. Flexible internal standards approved via site plan. Min acreage: 50 ac (residential, no retail), 100 ac (residential + retail), 5 ac (commercial), 10 ac (industrial/OIP)." },
      { term: "SP", text: "Scenic Preservation. Overlay protecting historic, natural, and scenic areas. Max 50% lot coverage, 35 ft height. Design standards require landscape preservation and visual compatibility." },
      { term: "General: Min 20 ft between buildings", text: "Per Section 402, min 20 ft between principal buildings on multi-building lots, and min 20 ft between principal and accessory buildings." },
      { term: "General: Lot size by utility type", text: "Per Section 401, lots with public water+sewer: 0.5 ac min. Lots with septic (any water source): 1.5 ac min. Lot widths: well+septic 200 ft, public water+septic 125 ft, full utilities 100 ft. Street frontage: 50 ft min." },
      { term: "Animal Containment Setbacks (A-1)", text: "Pre-Sept 2015: Poultry 200 ft from property line, 600 ft from residences. Swine/livestock/dairy 400 ft from property line, 1,320/2,640 ft from residences. Post-Sept 2015: stricter, including 600 ft poultry from non-A-1 property and 1.5 mi swine from municipal boundaries." },
    ],
  },
  "White County": {
    note: "Source: White County Zoning Ordinance. Verify with White County Planning & Community Development at (706) 865-6838.",
    districts: [
      { code: "A-1", density: "1/lot" },
      { code: "R-1", density: "1/lot" },
      { code: "R-2", density: "2/lot" },
      { code: "R-3", density: "4/ac" },
      { code: "C-1", density: "\u2014" },
      { code: "C-2", density: "\u2014" },
      { code: "I-1", density: "\u2014" },
      { code: "I-2", density: "\u2014" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Septic", values: ["2 ac", "1.5 ac", "1 ac", "0.5 ac", "1 ac", "1 ac", "1 ac", "2 ac"], unit: "AC" },
          { label: "Public Sewer", values: ["1 ac", "0.5 ac", "0.5 ac", "10,000 sf", "0.5 ac", "0.5 ac", "0.5 ac", "1 ac"], unit: "" },
        ],
      },
      {
        title: "Minimum Lot Width",
        rows: [
          { label: "Width (Feet)", values: ["200", "150", "100", "80", "100", "100", "100", "150"], unit: "FT" },
        ],
      },
      {
        title: "Max Height",
        rows: [
          { label: "Max Height", values: ["35", "35", "35", "45", "35", "45", "45", "60"], unit: "FT" },
        ],
      },
      {
        title: "Front Yard Setback",
        rows: [
          { label: "Arterial", values: ["60", "50", "40", "40", "50", "60", "60", "60"], unit: "FT" },
          { label: "Local", values: ["40", "30", "25", "25", "30", "40", "40", "40"], unit: "FT" },
        ],
      },
      {
        title: "Side Yard Setback",
        rows: [
          { label: "Side (each)", values: ["20", "15", "10", "10", "15", "15", "20", "25"], unit: "FT" },
        ],
      },
      {
        title: "Rear Yard Setback",
        rows: [
          { label: "Rear", values: ["30", "25", "25", "20", "25", "25", "30", "30"], unit: "FT" },
        ],
      },
    ],
    definitions: [
      { term: "A-1", text: "Agricultural District. Farming and low-density residential." },
      { term: "R-1", text: "Single-Family Residential." },
      { term: "R-2", text: "Two-Family Residential." },
      { term: "R-3", text: "Multi-Family Residential." },
      { term: "C-1", text: "Neighborhood Commercial." },
      { term: "C-2", text: "General Commercial." },
      { term: "I-1", text: "Light Industrial." },
      { term: "I-2", text: "Heavy Industrial." },
    ],
  },
};

const HIGHLIGHT_COLORS = {
  "Banks County": { bg: "#4a2060", accent: "#7b3fa0", light: "#f0e6f6" },
  "Hall County": { bg: "#1a5632", accent: "#2d8a4e", light: "#e8f5ee" },
  "Jackson County": { bg: "#5c3317", accent: "#8b572a", light: "#f5ede6" },
  "Oconee County": { bg: "#1a3a56", accent: "#2a6a9e", light: "#e4eef8" },
  "Oglethorpe County": { bg: "#5c2028", accent: "#8b3a3a", light: "#f5e6e6" },
  "White County": { bg: "#2d4a3e", accent: "#4a7a66", light: "#e6f0eb" },
};

export default function ZoningStandards() {
  const [activeCounty, setActiveCounty] = useState("Banks County");
  const [highlightCol, setHighlightCol] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [compareCols, setCompareCols] = useState([]);

  const county = COUNTIES[activeCounty];
  const colors = HIGHLIGHT_COLORS[activeCounty];

  const toggleCompare = (idx) => {
    if (!compareMode) return;
    setCompareCols((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : prev.length < 2
        ? [...prev, idx]
        : [prev[1], idx]
    );
  };

  const countyNames = Object.keys(COUNTIES);

  return (
    <div style={{ minHeight: "100vh", background: "#0f1119", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Source+Serif+4:wght@600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ padding: "28px 24px 0", maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{
          fontFamily: "'Source Serif 4', serif",
          fontWeight: 700,
          fontSize: "1.6rem",
          color: "#e8eaf0",
          letterSpacing: "-0.02em",
          marginBottom: 4,
        }}>
          NE Georgia Zoning Standards
        </h1>
        <p style={{ color: "#6b7084", fontSize: "0.82rem", margin: 0 }}>
          Development standards by zoning district. Click a column to highlight. Compare mode selects two.
        </p>
      </div>

      {/* County Tabs */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 0" }}>
        <div style={{
          display: "flex",
          gap: 3,
          background: "#181b27",
          border: "1px solid #2a2e3f",
          borderRadius: 12,
          padding: 4,
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}>
          {countyNames.map((name) => (
            <button
              key={name}
              onClick={() => {
                setActiveCounty(name);
                setHighlightCol(null);
                setCompareMode(false);
                setCompareCols([]);
              }}
              style={{
                flex: "0 0 auto",
                padding: "10px 16px",
                borderRadius: 9,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.78rem",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
                color: activeCounty === name ? "#e8eaf0" : "#6b7084",
                background: activeCounty === name
                  ? `${HIGHLIGHT_COLORS[name].bg}cc`
                  : "transparent",
                boxShadow: activeCounty === name
                  ? `0 0 0 1px ${HIGHLIGHT_COLORS[name].accent}66`
                  : "none",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Compare Toggle */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 24px 0" }}>
        <button
          onClick={() => {
            setCompareMode(!compareMode);
            setCompareCols([]);
            setHighlightCol(null);
          }}
          style={{
            padding: "6px 14px",
            borderRadius: 7,
            border: `1px solid ${compareMode ? colors.accent : "#2a2e3f"}`,
            background: compareMode ? `${colors.bg}88` : "transparent",
            color: compareMode ? colors.accent : "#6b7084",
            fontSize: "0.75rem",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
          }}
        >
          {compareMode ? "Exit Compare" : "Compare Districts"}
        </button>
        {compareMode && (
          <span style={{ color: "#6b7084", fontSize: "0.72rem", marginLeft: 10 }}>
            Select 2 columns to compare
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 60px" }}>
        {/* Verification Note */}
        {county.note && (
          <div
            style={{
              padding: "10px 16px",
              marginBottom: 12,
              background: county.note.toLowerCase().includes("verify")
                ? "#fff8e6"
                : "#e8f0ff",
              border: `1px solid ${
                county.note.toLowerCase().includes("verify")
                  ? "#f0d060"
                  : "#a0c0f0"
              }`,
              borderRadius: 8,
              fontSize: "0.72rem",
              color: county.note.toLowerCase().includes("verify")
                ? "#7a6520"
                : "#3a5a8a",
              lineHeight: 1.5,
            }}
          >
            {county.note.toLowerCase().includes("verify") ? "\u26A0\uFE0F" : "\u2139\uFE0F"}{" "}
            {county.note}
          </div>
        )}

        {/* District Header Bar */}
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `140px repeat(${county.districts.length}, minmax(70px, 1fr))`,
              minWidth: 140 + county.districts.length * 70,
            }}
          >
            <div
              style={{
                background: colors.bg,
                padding: "12px 14px",
                borderRadius: "12px 0 0 0",
              }}
            >
              <span style={{ color: "#ffffff99", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                District
              </span>
            </div>
            {county.districts.map((d, idx) => {
              const isHighlighted =
                (!compareMode && highlightCol === idx) ||
                (compareMode && compareCols.includes(idx));
              return (
                <div
                  key={d.code}
                  onClick={() => {
                    if (compareMode) {
                      toggleCompare(idx);
                    } else {
                      setHighlightCol(highlightCol === idx ? null : idx);
                    }
                  }}
                  style={{
                    background: isHighlighted ? colors.accent : colors.bg,
                    padding: "12px 6px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    borderRadius: idx === county.districts.length - 1 ? "0 12px 0 0" : 0,
                  }}
                >
                  <div style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 700 }}>{d.code}</div>
                  <div style={{ color: "#ffffff88", fontSize: "0.62rem", marginTop: 2 }}>{d.density}</div>
                </div>
              );
            })}
          </div>

          {/* Data Sections */}
          {county.sections.map((section, sIdx) => (
            <div key={sIdx}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `140px repeat(${county.districts.length}, minmax(70px, 1fr))`,
                  minWidth: 140 + county.districts.length * 70,
                }}
              >
                <div
                  style={{
                    gridColumn: `1 / -1`,
                    background: "#1a1d2a",
                    padding: "8px 14px",
                    borderTop: "1px solid #2a2e3f",
                  }}
                >
                  <span style={{ color: colors.accent, fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {section.title}
                  </span>
                </div>
              </div>
              {section.rows.map((row, rIdx) => (
                <div
                  key={rIdx}
                  style={{
                    display: "grid",
                    gridTemplateColumns: `140px repeat(${county.districts.length}, minmax(70px, 1fr))`,
                    minWidth: 140 + county.districts.length * 70,
                    borderTop: "1px solid #1e2130",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 14px",
                      background: "#13151f",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#8a8fa3", fontSize: "0.7rem", lineHeight: 1.3 }}>
                      {row.label}
                      {row.unit && (
                        <span style={{ color: "#5a5f73", fontSize: "0.6rem", marginLeft: 4 }}>
                          {row.unit}
                        </span>
                      )}
                    </span>
                  </div>
                  {row.values.map((val, vIdx) => {
                    const isHighlighted =
                      (!compareMode && highlightCol === vIdx) ||
                      (compareMode && compareCols.includes(vIdx));
                    return (
                      <div
                        key={vIdx}
                        onClick={() => {
                          if (compareMode) {
                            toggleCompare(vIdx);
                          } else {
                            setHighlightCol(highlightCol === vIdx ? null : vIdx);
                          }
                        }}
                        style={{
                          padding: "8px 6px",
                          textAlign: "center",
                          background: isHighlighted ? colors.light + "18" : "#13151f",
                          cursor: "pointer",
                          transition: "background 0.15s",
                          borderLeft: isHighlighted
                            ? `2px solid ${colors.accent}44`
                            : "2px solid transparent",
                        }}
                      >
                        <span
                          style={{
                            color: val === "\u2014" || val === "N/A" ? "#3a3e50" : isHighlighted ? "#e8eaf0" : "#c0c4d4",
                            fontSize: "0.72rem",
                            fontWeight: isHighlighted ? 600 : 400,
                          }}
                        >
                          {val}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Definitions */}
        {county.definitions && county.definitions.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <h3 style={{
              color: "#e8eaf0",
              fontSize: "0.88rem",
              fontFamily: "'Source Serif 4', serif",
              fontWeight: 600,
              marginBottom: 12,
            }}>
              District & Term Reference
            </h3>
            <div style={{ display: "grid", gap: 8 }}>
              {county.definitions.map((def, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#181b27",
                    border: "1px solid #2a2e3f",
                    borderRadius: 8,
                    padding: "10px 14px",
                  }}
                >
                  <span style={{ color: colors.accent, fontSize: "0.74rem", fontWeight: 700 }}>
                    {def.term}
                  </span>
                  <span style={{ color: "#8a8fa3", fontSize: "0.72rem", marginLeft: 8, lineHeight: 1.5 }}>
                    {def.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
