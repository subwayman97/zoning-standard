import { useState } from "react";

const COUNTIES = {
  "Hall County": {
    districts: [
      { code: "AG-1", density: "2 units/lot" },
      { code: "AR-1", density: "1 unit/lot" },
      { code: "VC", density: "1 unit/lot" },
      { code: "R1-L", density: "1 unit/lot" },
      { code: "R1", density: "1 unit/lot" },
      { code: "R-TF", density: "2 units/lot" },
      { code: "R-X", density: "—" },
      { code: "CS", density: "8/ac" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          {
            label: "Private System",
            values: ["—", "—", "21,780", "—", "21,780", "—", "—", "—"],
            unit: "SF",
          },
          {
            label: "Public Water / Septic",
            values: ["—", "43,560", "—", "43,560", "—", "—", "—", "—"],
            unit: "SF",
          },
          {
            label: "Full Public Utilities / Min",
            values: [
              "5 ac",
              "65,340",
              "35,000",
              "65,340",
              "35,000",
              "35,000",
              "30,000",
              "—",
            ],
            unit: "SF",
          },
        ],
      },
      {
        title: "Minimum Lot Frontage",
        rows: [
          {
            label: "Frontage (Feet)",
            values: ["50", "50", "50", "50", "50", "50", "50", "—"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Minimum Floor Area",
        rows: [
          {
            label: "Dwelling Floor Area",
            values: ["256", "256", "256", "256", "256", "256", "256", "256"],
            unit: "SF",
          },
          {
            label: "Min Width",
            values: ["16", "16", "16", "16", "16", "16", "16", "16"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Max Height of Building or Structure",
        rows: [
          {
            label: "Max Height",
            values: ["50", "50", "50", "50", "50", "50", "50", "50"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Minimum Setbacks",
        rows: [
          {
            label: "Front",
            values: ["40", "40", "30", "30", "30", "40", "25", "—"],
            unit: "FT",
          },
          {
            label: "Side",
            values: ["15", "15", "10", "10", "10", "10", "5", "—"],
            unit: "FT",
          },
          {
            label: "Rear",
            values: ["25", "25", "20", "20", "20", "20", "10", "—"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Maximum Lot Coverage",
        rows: [
          {
            label: "% of Lot",
            values: ["35%", "35%", "35%", "35%", "35%", "45%", "45%", "—"],
            unit: "",
          },
        ],
      },
    ],
    definitions: [
      {
        term: "Minor Subdivision",
        text: "The subdivision of land into a total of no more than 5 lots or building sites during a 12-month period. The resulting lots must conform to the zoning district standards. Minor subdivisions recorded with the county clerk of superior court prior to January 1 must comply with county zoning and subdivision standards.",
      },
      {
        term: "Access",
        text: "In any subdivision not involving the construction of new streets, all lots must have access to a road designated as an arterial or collector.",
      },
    ],
  },
  "Jackson County": {
    note: "Source: Jackson County UDC & Health Dept Lot Ordinance. Verify with Planning & Zoning (706) 367-6348.",
    districts: [
      { code: "PCFD", density: "—" },
      { code: "A-1", density: "—" },
      { code: "A-2", density: "—" },
      { code: "A-3", density: "—" },
      { code: "AR", density: "—" },
      { code: "R-1", density: "—" },
      { code: "R-2", density: "—" },
      { code: "R-3", density: "—" },
      { code: "MH", density: "—" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Public Water + Septic", values: ["25 ac","5 ac","3 ac","1.5 ac","1.5 ac","26,136","15,000","10,000","15,000"], unit: "SF" },
          { label: "Private Water + Septic", values: ["25 ac","5 ac","3 ac","1.5 ac","1.5 ac","65,340","43,560","21,780","43,560"], unit: "SF" },
        ],
      },
      {
        title: "Minimum Lot Width",
        rows: [
          { label: "Lot Width", values: ["500","300","210","150","150","100","80","60","80"], unit: "FT" },
        ],
      },
      {
        title: "Minimum Lot Frontage",
        rows: [
          { label: "Frontage", values: ["200","200","150","100","100","60","50","35","50"], unit: "FT" },
        ],
      },
      {
        title: "Minimum Floor Area per DU",
        rows: [
          { label: "Single-Family", values: ["—","1,800","1,800","1,600","1,600","1,200","1,000","800","—"], unit: "SF" },
        ],
      },
      {
        title: "Max Height of Building or Structure",
        rows: [
          { label: "Max Height", values: ["45","45","45","45","45","35","35","45","35"], unit: "FT" },
        ],
      },
      {
        title: "Minimum Building Setbacks",
        rows: [
          { label: "Front", values: ["60","60","50","40","40","30","25","25","25"], unit: "FT" },
          { label: "Side", values: ["30","30","25","20","20","10","10","10","10"], unit: "FT" },
          { label: "Rear", values: ["50","50","40","40","40","25","20","25","25"], unit: "FT" },
        ],
      },
      {
        title: "Maximum Building Coverage",
        rows: [
          { label: "% of Lot", values: ["10%","15%","20%","25%","30%","35%","40%","50%","40%"], unit: "" },
        ],
      },
    ],
    definitions: [
      { term: "A-2 Lot Split Exception", text: "Any lot in A-2 containing 8+ acres may be divided into no more than 3 lots (including original) at min 1.5 acres each, provided lot width and frontage requirements are met." },
      { term: "Health Dept Lot Size", text: "Min lot per Board of Health: 0.6 acres (26,136 SF) with public water and approved on-site sewage; 1.5 acres with non-public water." },
    ],
  },
  "Banks County": {
    note: "Source: Banks County Zoning Ordinance & Residential Construction Packet. Verify with Planning & Development (706) 677-6204.",
    districts: [
      { code: "CAD", density: "—" },
      { code: "ARR", density: "—" },
      { code: "R-1", density: "—" },
      { code: "R-2", density: "—" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          { label: "Minimum Lot Size", values: ["20 ac","2 ac","2 ac","1 ac"], unit: "" },
        ],
      },
      {
        title: "Minimum Floor Area (Heated)",
        rows: [
          { label: "Dwelling Min SF", values: ["1,000","1,000","2,000","1,000"], unit: "SF" },
          { label: "Main Floor Min", values: ["—","—","1,500","—"], unit: "SF" },
        ],
      },
      {
        title: "Minimum Building Setbacks",
        rows: [
          { label: "Front (from road center)", values: ["70","70","70","70"], unit: "FT" },
          { label: "Side", values: ["30","30","30","20"], unit: "FT" },
          { label: "Rear", values: ["30","30","30","30"], unit: "FT" },
        ],
      },
      {
        title: "Max Height of Building or Structure",
        rows: [
          { label: "Max Height", values: ["35","35","35","35"], unit: "FT" },
        ],
      },
      {
        title: "Minimum Lot Width / Frontage",
        rows: [
          { label: "Min Lot Width", values: ["200","150","150","100"], unit: "FT" },
          { label: "Min Frontage", values: ["200","150","100","80"], unit: "FT" },
        ],
      },
    ],
    definitions: [
      { term: "CAD District", text: "Consolidated Agricultural District-Intensive. Min 20 contiguous acres. If land not actively used for intensive ag or falls below 20 acres, county may initiate rezoning review." },
      { term: "ARR Subdivision", text: "No tract in ARR can be less than 2 acres or subdivided below 2 acres. Class I Subdivisions must comply with Banks County Subdivision Regs." },
      { term: "R-1 Rezoning Minimums", text: "Min 2 acres for Class IV Subdivision, min 5 acres for Class II or Class III Subdivision." },
    ],
  },
  "Oconee County": {
    districts: [
      { code: "AG", density: "—" },
      { code: "AR", density: "—" },
      { code: "AR-3", density: "—" },
      { code: "R1", density: "—" },
      { code: "R2", density: "—" },
      { code: "R3", density: "—" },
      { code: "MH", density: "—" },
    ],
    sections: [
      {
        title: "Minimum Lot Area",
        rows: [
          {
            label: "With Sewer",
            values: [
              "5 ac",
              "3 ac",
              "2 ac",
              "43,560",
              "30,000",
              "30,000",
              "30,000",
            ],
            unit: "SF",
          },
          {
            label: "Without Sewer",
            values: [
              "5 ac",
              "3 ac",
              "2 ac",
              "65,340",
              "51,000",
              "N/A",
              "51,000",
            ],
            unit: "SF",
          },
        ],
      },
      {
        title: "Minimum Buildable Area",
        rows: [
          {
            label: "Buildable Area (SF)",
            values: [
              "24,892",
              "24,892",
              "24,892",
              "24,892",
              "17,325",
              "20,400",
              "17,600",
            ],
            unit: "SF",
          },
        ],
      },
      {
        title: "Minimum Lot Width",
        rows: [
          {
            label: "With Sewer",
            values: ["100", "100", "100", "100", "125", "100", "100"],
            unit: "FT",
          },
          {
            label: "Without Sewer",
            values: ["150", "150", "150", "150", "150", "150", "150"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Max Principal Building/Structure Height",
        rows: [
          {
            label: "Max Height",
            values: ["40", "40", "40", "40", "40", "40", "40"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Minimum Principal Building Setback",
        rows: [
          {
            label: "Front, Major Thoroughfare (from ROW)",
            values: ["40", "40", "40", "40", "35", "30", "40"],
            unit: "FT",
          },
          {
            label: "Front, Minor Street (from ROW)",
            values: ["30", "30", "30", "30", "25", "25", "30"],
            unit: "FT",
          },
          {
            label: "Side",
            values: ["25", "15", "15", "10", "10", "—", "10"],
            unit: "FT",
          },
          {
            label: "Rear",
            values: ["25", "40", "40", "40", "40", "15", "40"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Required Incompatible Use Buffer (Abutting)",
        rows: [
          {
            label: "Agricultural",
            values: ["—", "—", "—", "—", "—", "15", "15"],
            unit: "FT",
          },
          {
            label: "1 or 2 Family Residential",
            values: ["—", "—", "—", "—", "—", "25", "25"],
            unit: "FT",
          },
        ],
      },
      {
        title: "Minimum Floor Area per DU",
        rows: [
          {
            label: "1 Story",
            values: [
              "1,000",
              "1,600",
              "1,600",
              "1,600",
              "1,600",
              "1,600",
              "1,000",
            ],
            unit: "SF",
          },
          {
            label: "2 Story",
            values: ["—", "1,850", "1,850", "1,850", "1,850", "1,850", "—"],
            unit: "SF",
          },
          {
            label: "Two Family, per DU",
            values: ["—", "—", "—", "1,500", "—", "1,500", "—"],
            unit: "SF",
          },
          {
            label: "MF",
            values: ["—", "—", "—", "800 | 900 | 1,000", "—", "—", "—"],
            unit: "SF",
          },
        ],
      },
    ],
    definitions: [
      {
        term: "Minor Subdivision: 2-Lot Split",
        text: "The combination or recombination of previously platted lots where the total number of lots is not increased and the resultant lots comply with this Development Code and all ordinances and resolutions of Oconee County.",
      },
      {
        term: "Minor Subdivision: 5-Lot Split",
        text: "The division of land into five or fewer lots, tracts or parcels with each resultant lot, tract or parcel: (a) Containing at least the minimum lot area required for the zoning district; (b) Fronting on a public street improved to County standards; (c) Conforming to this Development Code.",
      },
      {
        term: "Minor Subdivision: Large Lot (min 25 acres)",
        text: "The division of land into lots, tracts or parcels with each resultant lot, tract or parcel: (a) Containing 25 or more acres; (b) Fronting on a public street improved to County standards; (c) Conforming to this Development Code.",
      },
    ],
  },
};

const HIGHLIGHT_COLORS = {
  "Hall County": { bg: "#1a5632", accent: "#2d8a4e", light: "#e8f5ee" },
  "Jackson County": { bg: "#5c3317", accent: "#8b572a", light: "#f5ede6" },
  "Banks County": { bg: "#4a2060", accent: "#7b3fa0", light: "#f0e6f6" },
  "Oconee County": { bg: "#1a3a56", accent: "#2a6a9e", light: "#e4eef8" },
};

export default function ZoningStandards() {
  const [activeCounty, setActiveCounty] = useState("Hall County");
  const [highlightCol, setHighlightCol] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [compareCols, setCompareCols] = useState([]);

  const county = COUNTIES[activeCounty];
  const colors = HIGHLIGHT_COLORS[activeCounty];

  const toggleCompare = (idx) => {
    if (!compareMode) return;
    setCompareCols((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : prev.length < 2 ? [...prev, idx] : [prev[1], idx]
    );
  };

  const isHighlighted = (idx) => {
    if (compareMode) return compareCols.includes(idx);
    return highlightCol === idx;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f6f3",
        fontFamily: "'Source Serif 4', 'Georgia', serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@300;400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          background: colors.bg,
          padding: "28px 24px 20px",
          transition: "background 0.4s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 4,
            }}
          >
            Northeast Georgia
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Zoning Development Standards
          </h1>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Dimensional requirements by zoning classification
          </p>
        </div>
      </div>

      {/* County Tabs + Controls */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e0db",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", gap: 0 }}>
            {Object.keys(COUNTIES).map((name) => {
              const active = name === activeCounty;
              return (
                <button
                  key={name}
                  onClick={() => {
                    setActiveCounty(name);
                    setHighlightCol(null);
                    setCompareCols([]);
                  }}
                  style={{
                    padding: "14px 20px",
                    border: "none",
                    borderBottom: active
                      ? `3px solid ${HIGHLIGHT_COLORS[name].accent}`
                      : "3px solid transparent",
                    background: "transparent",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    color: active ? HIGHLIGHT_COLORS[name].bg : "#888",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {name}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              setCompareMode(!compareMode);
              setCompareCols([]);
              setHighlightCol(null);
            }}
            style={{
              padding: "6px 14px",
              border: compareMode
                ? `2px solid ${colors.accent}`
                : "2px solid #ccc",
              borderRadius: 6,
              background: compareMode ? colors.light : "transparent",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: compareMode ? colors.bg : "#666",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {compareMode
              ? `Compare Mode ON ${compareCols.length}/2`
              : "Compare Districts"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px 60px" }}>
        {/* Verification Note */}
        {county.note && (
          <div
            style={{
              padding: "10px 16px",
              marginBottom: 16,
              background: "#fff8e6",
              border: "1px solid #f0d060",
              borderRadius: 8,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "#7a6520",
              lineHeight: 1.5,
            }}
          >
            ⚠️ {county.note}
          </div>
        )}

        {/* District Header Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `200px repeat(${county.districts.length}, 1fr)`,
            gap: 0,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "#999",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Zoning District
          </div>
          {county.districts.map((d, i) => (
            <div
              key={d.code}
              onClick={() => {
                if (compareMode) {
                  toggleCompare(i);
                } else {
                  setHighlightCol(highlightCol === i ? null : i);
                }
              }}
              style={{
                padding: "10px 8px",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: 8,
                background: isHighlighted(i) ? colors.accent : "transparent",
                transition: "all 0.2s ease",
                border: isHighlighted(i) ? "none" : "2px solid transparent",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: isHighlighted(i) ? "#fff" : colors.bg,
                  letterSpacing: "-0.02em",
                }}
              >
                {d.code}
              </div>
              {d.density !== "—" && (
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    color: isHighlighted(i) ? "rgba(255,255,255,0.7)" : "#999",
                    marginTop: 2,
                  }}
                >
                  {d.density}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sections */}
        {county.sections.map((section, si) => (
          <div
            key={si}
            style={{
              marginBottom: 20,
              background: "#fff",
              borderRadius: 10,
              border: "1px solid #e8e6e1",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                background: "#fafaf8",
                borderBottom: "1px solid #e8e6e1",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: colors.bg,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {section.title}
              </h3>
            </div>
            {section.rows.map((row, ri) => (
              <div
                key={ri}
                style={{
                  display: "grid",
                  gridTemplateColumns: `200px repeat(${county.districts.length}, 1fr)`,
                  gap: 0,
                  borderBottom:
                    ri < section.rows.length - 1
                      ? "1px solid #f0eeea"
                      : "none",
                }}
              >
                <div
                  style={{
                    padding: "10px 16px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#666",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row.label}
                  {row.unit && (
                    <span
                      style={{
                        marginLeft: 4,
                        fontSize: 10,
                        color: "#aaa",
                        fontWeight: 400,
                      }}
                    >
                      ({row.unit})
                    </span>
                  )}
                </div>
                {row.values.map((val, vi) => {
                  const highlighted = isHighlighted(vi);
                  const isDash = val === "—" || val === "N/A";
                  return (
                    <div
                      key={vi}
                      style={{
                        padding: "10px 8px",
                        textAlign: "center",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        fontWeight: highlighted ? 700 : isDash ? 400 : 500,
                        color: highlighted
                          ? colors.bg
                          : isDash
                          ? "#ccc"
                          : "#333",
                        background: highlighted
                          ? colors.light
                          : "transparent",
                        transition: "all 0.15s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {val}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}

        {/* Definitions */}
        {county.definitions && county.definitions.length > 0 && (
          <div
            style={{
              marginTop: 32,
              padding: "20px 24px",
              background: "#fff",
              borderRadius: 10,
              border: "1px solid #e8e6e1",
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: colors.bg,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Key Definitions
            </h3>
            {county.definitions.map((def, di) => (
              <div key={di} style={{ marginBottom: di < county.definitions.length - 1 ? 14 : 0 }}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#333",
                    marginBottom: 4,
                  }}
                >
                  {def.term}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.5,
                  }}
                >
                  {def.text}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: 32,
            padding: "16px 0",
            borderTop: "1px solid #e8e6e1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              color: "#aaa",
            }}
          >
            Source: County Development Codes. Verify with local planning office before use.
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              color: "#aaa",
            }}
          >
            Foothills Real Estate | Hall County, GA
          </div>
        </div>
      </div>
    </div>
  );
}
