// Global execution context parameters
let currentActiveMap = "lincoln";

// System Database Catalog Mappings
const ghostEvidenceDB = {
    "Aswang": ["EMF 5", "Writing", "Wither"],
    "Banshee": ["Freezing", "Orb", "Handprints"],
    "Demon": ["EMF 5", "Freezing", "Handprints"],
    "Dullahan": ["Freezing", "Laser", "Wither"],
    "Dybbuk": ["Freezing", "Handprints", "Wither"],
    "Entity": ["Handprints", "Laser", "Spirit Box"],
    "Ghoul": ["Freezing", "Orb", "Spirit Box"],
    "Keres": ["Handprints", "Box", "Wither"],
    "Leviathan": ["Writing", "Handprints", "Orb"],
    "Nightmare": ["EMF 5", "Orb", "Spirit Box"],
    "NightM": ["EMF 5", "Orb", "Spirit Box"],
    "Oni": ["Freezing", "Laser", "Box"],
    "Phantom": ["EMF 5", "Handprints", "Orb"],
    "Revenant": ["EMF 5", "Freezing", "Writing"],
    "Shadow": ["EMF 5", "Writing", "Laser"],
    "Siren": ["EMF 5", "Spirit Box", "Wither"],
    "Skinwalker": ["Freezing", "Writing", "Spirit Box"],
    "Skin": ["Freezing", "Writing", "Spirit Box"],
    "Specter": ["EMF 5", "Freezing", "Laser"],
    "Spirit": ["Writing", "Handprints", "Spirit Box"],
    "The Wisp": ["Laser", "Orb", "Wither"],
    "Wisp": ["Laser", "Orb", "Wither"],
    "Umbra": ["Handprints", "Orb", "Laser"],
    "Vex": ["Freezing", "Orb", "Wither"],
    "Wendigo": ["Writing", "Orb", "Laser"],
    "Wraith": ["EMF 5", "Laser", "Spirit Box"]
};

const mapsDataDatabase = {
    lincoln: {
        title: "Lincoln Street",
        banner: "",
        rooms: [
            { ruangan: "Basement", hantu: [{ nama: "Dullahan", persen: 40.0 }, { nama: "Vex", persen: 40.0 }, { nama: "Keres", persen: 40.0 }] },
            { ruangan: "Pink Bedroom", hantu: [{ nama: "Banshee", persen: 25.0 }, { nama: "Spirit", persen: 37.5 }, { nama: "Specter", persen: 37.5 }] },
            { ruangan: "Blue Bedroom", hantu: [{ nama: "Skinwalker", persen: 50.0 }, { nama: "Shadow", persen: 30.0 }, { nama: "Phantom", persen: 20.0 }] },
            { ruangan: "Master Bathroom", note: "Not Sure", hantu: [{ nama: "Dybbuk", persen: 71.0 }, { nama: "Aswang", persen: 42.6 }] },
            { ruangan: "Master Bedroom", hantu: [{ nama: "Siren", persen: 28.4 }, { nama: "Leviathan", persen: 14.2 }, { nama: "The Wisp", persen: 42.6 }, { nama: "Aswang", persen: 14.2 }] },
            { ruangan: "Bathroom", hantu: [{ nama: "Umbra", persen: 14.4 }, { nama: "Leviathan", persen: 11.1 }, { nama: "Revenant", persen: 11.1 }, { nama: "Banshee", persen: 33.3 }] },
            { ruangan: "Kitchen", hantu: [{ nama: "Ghoul", persen: 30.4 }, { nama: "Entity", persen: 45.6 }, { nama: "Demon", persen: 22.8 }] },
            { ruangan: "Living Room", hantu: [{ nama: "Nightmare", persen: 56.8 }, { nama: "Phantom", persen: 14.2 }, { nama: "Oni", persen: 28.4 }] },
            { ruangan: "Garage", hantu: [{ nama: "Demon", persen: 28.4 }, { nama: "Wendigo", persen: 56.8 }, { nama: "Wraith", persen: 14.2 }] }
        ]
    },
    juniper: {
        title: "Juniper Road (V2)",
        banner: "<strong>⚠️ Foyer Constraint Protocol:</strong> No entity signature can assert the Foyer layout as a primary manifest destination.",
        rooms: [
            { ruangan: "Bathroom", hantu: [{ nama: "Shadow", persen: 32.13 }, { nama: "Skinwalker", persen: 28.56 }, { nama: "Phantom", persen: 28.56 }, { nama: "Oni", persen: 10.71 }] },
            { ruangan: "Bedroom", hantu: [{ nama: "Wraith", persen: 33.30 }, { nama: "Wendigo", persen: 26.64 }, { nama: "Demon", persen: 26.64 }, { nama: "Entity", persen: 13.32 }] },
            { ruangan: "Kitchen", hantu: [{ nama: "Siren", persen: 35.72 }, { nama: "The Wisp", persen: 35.72 }, { nama: "Aswang", persen: 14.28 }, { nama: "Dybbuk", persen: 14.28 }] },
            { ruangan: "Laundry", hantu: [{ nama: "Nightmare", persen: 46.62 }, { nama: "Ghoul", persen: 39.96 }, { nama: "Oni", persen: 19.78 }, { nama: "Entity", persen: 6.66 }] },
            { ruangan: "Living Room", hantu: [{ nama: "Vex", persen: 42.24 }, { nama: "Keres", persen: 26.88 }, { nama: "Dullahan", persen: 26.88 }, { nama: "Aswang", persen: 3.82 }] },
            { ruangan: "Office", hantu: [{ nama: "Spirit", persen: 33.30 }, { nama: "Banshee", persen: 27.75 }, { nama: "Specter", persen: 16.65 }, { nama: "Skinwalker", persen: 11.10 }, { nama: "Entity", persen: 5.55 }, { nama: "Umbra", persen: 5.55 }] },
            { ruangan: "Pantry", hantu: [{ nama: "Leviathan", persen: 40.00 }, { nama: "Umbra", persen: 30.00 }, { nama: "Revenant", persen: 20.00 }, { nama: "Siren", persen: 10.00 }] }
        ]
    },
    fenway: {
        title: "Fenway Drive",
        banner: "",
        rooms: [
            { ruangan: "Living Room", hantu: [{ nama: "Phantom", persen: 71.0 }, { nama: "Skin", persen: 14.2 }, { nama: "Oni", persen: 14.2 }] },
            { ruangan: "Kitchen", hantu: [{ nama: "Demon", persen: 50.01 }, { nama: "Ghoul", persen: 53.34 }, { nama: "Entity", persen: 16.67 }] },
            { ruangan: "Garage", hantu: [{ nama: "Wendigo", persen: 40.0 }, { nama: "Demon", persen: 10.0 }, { nama: "Wraith", persen: 50.0 }] },
            { ruangan: "Dining Room", hantu: [{ nama: "Ghoul", persen: 33.34 }, { nama: "NightM", persen: 33.34 }, { nama: "Oni", persen: 33.34 }] },
            { ruangan: "Laundry", hantu: [{ nama: "Spirit", persen: 33.34 }, { nama: "Skin", persen: 16.67 }, { nama: "Specter", persen: 50.01 }] },
            { ruangan: "Pink Bedroom", hantu: [{ nama: "Umbra", persen: 40.02 }, { nama: "Spirit", persen: 33.35 }, { nama: "Banshee", persen: 26.68 }] },
            { ruangan: "Blue Bedroom", hantu: [{ nama: "Leviathan", persen: 60.0 }, { nama: "Revenant", persen: 40.0 }] },
            { ruangan: "Master Bedroom", hantu: [{ nama: "Aswang", persen: 63.63 }, { nama: "Dybbuk", persen: 27.2 }, { nama: "Dullahan", persen: 9.09 }] },
            { ruangan: "Master Closet", hantu: [{ nama: "Vex", persen: 50.01 }, { nama: "Keres", persen: 33.34 }, { nama: "Dullahan", persen: 16.67 }] },
            { ruangan: "Bathroom", hantu: [{ nama: "Wisp", persen: 36.36 }, { nama: "Siren", persen: 18.18 }, { nama: "Dybbuk", persen: 45.45 }, { nama: "Wendigo", persen: 9.09 }] }
        ]
    }
};

function switchMap(mapKey) {
    currentActiveMap = mapKey;
    const currentMap = mapsDataDatabase[mapKey];
    
    // Header Title Transition
    document.getElementById("dynamicTitle").innerText = currentMap.title;
    
    // Sync Button Activatons
    document.querySelectorAll(".map-select-btn").forEach(btn => {
        if (btn.getAttribute("data-map") === mapKey) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Danger Alerts Banner Logic Toggle
    const banner = document.getElementById("mapBanner");
    if (currentMap.banner) {
        banner.innerHTML = currentMap.banner;
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }

    // Clear and rebuild Vector Room nodes dynamically
    const roomDropdown = document.getElementById("roomDropdown");
    roomDropdown.innerHTML = '<option value="all">-- All Focal Regions --</option>';
    
    currentMap.rooms.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.ruangan;
        opt.textContent = item.ruangan;
        roomDropdown.appendChild(opt);
    });

    prosesData();
}

function cycleEvidence(element) {
    const states = ["neutral", "yes", "no"];
    let currentState = element.getAttribute("data-state");
    let nextState = states[(states.indexOf(currentState) + 1) % states.length];
    
    element.setAttribute("data-state", nextState);
    prosesData();
}

function prosesData() {
    const pilihanRuangan = document.getElementById('roomDropdown').value;
    const buttons = document.querySelectorAll('.evidence-btn');
    
    const yesEvidence = [];
    const noEvidence = [];

    buttons.forEach(btn => {
        const state = btn.getAttribute("data-state");
        const value = btn.getAttribute("data-value");
        if (state === "yes") yesEvidence.push(value);
        if (state === "no") noEvidence.push(value);
    });

    // Extract copy of map structure from operational database context
    let dataProses = JSON.parse(JSON.stringify(mapsDataDatabase[currentActiveMap].rooms));

    if (pilihanRuangan !== 'all') {
        dataProses = dataProses.filter(item => item.ruangan === pilihanRuangan);
    }

    const container = document.getElementById('kontenData');
    container.innerHTML = '';

    dataProses.forEach(item => {
        let hantuHTML = '';
        let cardMemilikiHantuValid = false;

        item.hantu.sort((a, b) => b.persen - a.persen);

        item.hantu.forEach(h => {
            let isMatch = true;
            const ghostEv = ghostEvidenceDB[h.nama] || [];

            if (yesEvidence.length > 0) {
                const memilikiSemua = yesEvidence.every(ev => ghostEv.includes(ev));
                if (!memilikiSemua) isMatch = false;
            }

            if (noEvidence.length > 0) {
                const memilikiTerlarang = noEvidence.some(ev => ghostEv.includes(ev));
                if (memilikiTerlarang) isMatch = false;
            }

            const hasActiveFilters = (yesEvidence.length > 0 || noEvidence.length > 0);
            
            if (isMatch || !hasActiveFilters) {
                if (isMatch) cardMemilikiHantuValid = true;
                
                const fadeClass = isMatch ? '' : 'faded';
                
                // Aesthetic nomenclature mapping overrides
                let displayName = h.nama;
                if (displayName === "Skin") displayName = "Skinwalker";
                if (displayName === "NightM") displayName = "Nightmare";
                if (displayName === "Wisp") displayName = "The Wisp";

                hantuHTML += `
                    <div class="ghost-item ${fadeClass}">
                        <span class="ghost-name">${displayName}</span>
                        <span class="ghost-percentage">${h.persen.toFixed(2)}%</span>
                    </div>
                `;
            }
        });

        if (cardMemilikiHantuValid || (yesEvidence.length === 0 && noEvidence.length === 0)) {
            const card = document.createElement('div');
            card.className = 'room-card';
            
            let cardContent = `
                <div class="room-header">${item.ruangan}</div>
                <div class="ghost-list">${hantuHTML}</div>
            `;
            
            if (item.note) {
                cardContent += `<div class="room-note">${item.note}</div>`;
            }
            
            card.innerHTML = cardContent;
            container.appendChild(card);
        }
    });

    if (container.innerHTML === '') {
        container.innerHTML = '<div class="no-data">Operational parameters failed to reconcile matching anomalies. Grid cleared.</div>';
    }
}

// Initial script execution context initialization loader
switchMap('lincoln');
