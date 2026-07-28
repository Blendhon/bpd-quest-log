const games = [
  {"name":"Halo: Campaign Evolved","slug":"halo-campaign-evolved","score":7.4,"playtime":"7.5 hours","date":"July 28, 2026","genre":"FPS","tags":["Halo","HaloCampaignEvolved","MasterChief","BPDPlays","GamingReview"]},
  {"name":"Shadow of the Tomb Raider: Definitive Edition","slug":"shadow-of-the-tomb-raider-definitive-edition","score":5,"playtime":"27.9 hours","date":"July 26, 2026","genre":"Action-Adventure","tags":["ShadowOfTheTombRaider","TombRaider","SurvivalTrilogy","BPDPlays","GamingReview"]},
  {"name":"Gears of War: Reloaded","slug":"gears-of-war-reloaded","score":6.6,"playtime":"5.4 hours","date":"June 21, 2026","genre":"Third-Person Shooter","tags":["GearsOfWar","ThirdPersonShooter","Xbox","BPDPlays","GamingReview"]},
  {"name":"Resident Evil Code: Veronica X","slug":"resident-evil-code-veronica-x","score":7.6,"playtime":"15.3 hours","date":"June 20, 2026","genre":"Survival Horror","tags":["ResidentEvilCodeVeronicaX","CodeVeronica","SurvivalHorror","Capcom","BPDPlays"]},
  {"name":"Pragmata","slug":"pragmata","score":8.3,"playtime":"14.9 hours","date":"May 29, 2026","genre":"Action / Adventure","tags":["Pragmata","Capcom","SciFiGaming","BPDPlays","GamingReview"]},
  {"name":"MOUSE: P.I. For Hire","slug":"mouse-pi-for-hire","score":8.5,"playtime":"12.6 hours","date":"May 22, 2026","genre":"FPS / Boomer Shooter","tags":["MousePIForHire","BoomerShooter","IndieGames","BPDPlays","GamingReview"]},
  {"name":"Resident Evil 7: Biohazard","slug":"resident-evil-7-biohazard","score":9.1,"playtime":"12.8 hours","date":"May 12, 2026","genre":"Survival Horror","tags":["ResidentEvil7","RE7","Biohazard","SurvivalHorror","Capcom"]},
  {"name":"The Unfinished Swan","slug":"the-unfinished-swan","score":8.5,"playtime":"1.8 hours","date":"May 10, 2026","genre":"Exploration / Artistic","tags":["TheUnfinishedSwan","IndieGames","BPDPlays","ArtisticGaming","TheWhiteKingdom"]},
  {"name":"A Little To The Left: Cupboards & Drawers","slug":"a-little-to-the-left-cupboards-drawers","score":8,"playtime":"2.5 hours","date":"May 9, 2026","genre":"Puzzle / Organization","tags":["ALittleToTheLeft","IndieGames","BPDPlays","PuzzleGame","RelaxingGames"]},
  {"name":"Resident Evil Requiem","slug":"resident-evil-requiem","score":9,"playtime":"13.9 hours","date":"May 8, 2026","genre":"Survival Horror","tags":["ResidentEvilRequiem","LeonKennedy","BPDPlays","SurvivalHorror","GamingReview"]},
  {"name":"Dumb Ways to Draw","slug":"dumb-ways-to-draw","score":6.5,"playtime":"4.2 hours","date":"May 7, 2026","genre":"Casual / Mobile","tags":["DumbWaysToDraw","MobileGaming","BPDPlays","SpinOff","GamingReview"]},
  {"name":"Super Mario World","slug":"super-mario-world","score":9.9,"playtime":"0.4 hours","date":"May 2, 2026","genre":"Platformer","tags":["SuperMarioWorld","Nintendo","Snes","RetroGaming","BPDPlays"]},
  {"name":"NieR Replicant ver.1.22474487139...","slug":"nier-replicant","score":9,"playtime":"20.4 hours","date":"Apr 25, 2026","genre":"Action / RPG","tags":["NieRReplicant","YokoTaro","BPDPlays","OST","GamingReview"]},
  {"name":"Simple 2000 Series Vol.105: The Maid-Fuku to Kikanjuu","slug":"simple-2000-vol105","score":6,"playtime":"2.5 hours","date":"Apr 02, 2026","genre":"Action / Shooter","tags":["Simple2000","PS2Gaming","BPDPlays","HiddenGems","RetroGaming"]},
  {"name":"Sleeping Dogs: Definitive Edition","slug":"sleeping-dogs-definitive-edition","score":8,"playtime":"15.3 hours","date":"Mar 29, 2026","genre":"Action / Open World","tags":["SleepingDogs","WeiShen","BPDPlays","PCGaming","GamingReview"]},
  {"name":"Grand Theft Auto: Chinatown Wars","slug":"gta-chinatown-wars","score":9,"playtime":"11.9 hours","date":"Mar 23, 2026","genre":"Action / Open World","tags":["GTA","ChinatownWars","BPDPlays","RockstarGames","PortableGaming"]},
  {"name":"Resident Evil 3 (2020)","slug":"resident-evil-3-2020","score":7.5,"playtime":"5.8 hours","date":"Mar 20, 2026","genre":"Survival Horror","tags":["ResidentEvil3","RE3Remake","BPDPlays","JillValentine","GamingReview"]},
  {"name":"Titanfall 2","slug":"titanfall-2","score":8,"playtime":"4.6 hours","date":"Mar 15, 2026","genre":"FPS","tags":["Titanfall2","BT7274","BPDPlays","PCGaming","GamingReview"]},
  {"name":"Tomb Raider (2013)","slug":"tomb-raider-2013","score":8.6,"playtime":"10.9 hours","date":"Mar 14, 2026","genre":"Action-Adventure","tags":["TombRaider","BPDPlays","LaraCroft","Yamatai"]},
  {"name":"Mafia: The Old Country","slug":"mafia-the-old-country","score":7.3,"playtime":"10.8 hours","date":"Mar 09, 2026","genre":"Action / Adventure","tags":["MafiaTheOldCountry","BPDPlays","MafiaGame","PCGaming","Review"]},
  {"name":"Viewfinder","slug":"viewfinder","score":9.3,"playtime":"3.7 hours","date":"Mar 06, 2026","genre":"Puzzle","tags":["Viewfinder","PuzzleGames","IndieGames","BPDPlays","GamingReview"]},
  {"name":"God of War III","slug":"god-of-war-iii","score":9.1,"playtime":"13.8 hours","date":"Mar 05, 2026","genre":"Action / Hack and Slash","tags":["GodOfWar","Kratos","BPDPlays","PlayStation","RetroGaming"]},
  {"name":"Resident Evil 2 (2019)","slug":"resident-evil-2-2019","score":8.7,"playtime":"14.6 hours","date":"Feb 19, 2026","genre":"Survival Horror","tags":["ResidentEvil2","RE2Remake","BPDPlays","SurvivalHorror","Gaming"]},
  {"name":"Control: Ultimate Edition","slug":"control-ultimate-edition","score":9.2,"playtime":"24.4 hours","date":"Feb 15, 2026","genre":"Action / Adventure","tags":["ControlGame","RemedyEntertainment","BPDPlays","AlanWake","Gaming"]},
  {"name":"Halo: Combat Evolved Anniversary (MCC)","slug":"halo-combat-evolved-anniversary","score":9,"playtime":"6.8 hours","date":"Feb 04, 2026","genre":"FPS","tags":["Halo","MasterChief","BPDPlays","Xbox","GameReview"]},
  {"name":"Resident Evil: Revelations 2","slug":"resident-evil-revelations-2","score":6.8,"playtime":"10.6 hours","date":"Jan 27, 2026","genre":"Survival Horror","tags":["ResidentEvil","RER2","BPDPlays","GameReview","SurvivalHorror"]},
  {"name":"ULTRAKILL","slug":"ultrakill","score":8.6,"playtime":"6.8 hours","date":"Jan 21, 2026","genre":"FPS / Boomer Shooter","tags":["Ultrakill","BPDPlays","GameReview","IndieGames","FPS"]},
  {"name":"Tomb Raider: Anniversary","slug":"tomb-raider-anniversary","score":7.9,"playtime":"12 hours","date":"Jan 19, 2026","genre":"Action-Adventure","tags":["TombRaider","LaraCroft","BPDPlays","GameReview","RetroGaming"]},
  {"name":"Tomb Raider: The Prophecy","slug":"tomb-raider-the-prophecy","score":7.1,"playtime":"4.7 hours","date":"Jan 10, 2026","genre":"Action-Adventure","tags":["TombRaider","GBA","LaraCroft","BPDPlays","RetroGaming"]},
  {"name":"Tomb Raider I Remastered","slug":"tomb-raider-i-remastered","score":8.9,"playtime":"15.5 hours","date":"Jan 04, 2026","genre":"Action-Adventure","tags":["TombRaider","LaraCroft","BPDPlays","GameReview","Gaming"]},
  {"name":"Resident Evil: Revelations","slug":"resident-evil-revelations","score":7.7,"playtime":"8.2 hours","date":"Jan 01, 2026","genre":"Survival Horror","tags":["ResidentEvil","BPDPlays","GameReview","Gaming","SurvivalHorror"]},
  {"name":"Dispatch","slug":"dispatch","score":8.5,"playtime":"7.9 hours","date":"Dec 30, 2025","genre":"Adventure / Choices","tags":["Dispatch","Gaming","BPDPlays","Finished","GameReview"]}
];

function renderCards(filtered) {
  const grid = document.getElementById('gamesGrid');
  grid.innerHTML = filtered.map(g => {
    const color = g.score >= 9 ? '#4caf50' : g.score >= 8 ? '#8bc34a' : g.score >= 7 ? '#ff9800' : g.score >= 6 ? '#f44336' : '#9e9e9e';
    return `<a href="games/${g.slug}.html" class="game-card">
      <div class="score-badge" style="background:${color}">${g.score}</div>
      <h2>${g.name}</h2>
      <span class="genre-tag">${g.genre}</span>
      <div class="meta">
        <span>⏱ ${g.playtime}</span>
        <span>📅 ${g.date}</span>
      </div>
    </a>`;
  }).join('');
}

let activeGenre = '';

function getYear(dateStr) {
  return parseInt(dateStr.split(', ')[1]);
}

function applyFilters() {
  const search = document.getElementById('search').value.toLowerCase();
  const rawMin = parseFloat(document.getElementById('minScore').value);
  const minScore = Number.isFinite(rawMin) ? rawMin : 0;
  const rawMax = parseFloat(document.getElementById('maxScore').value);
  const maxScore = Number.isFinite(rawMax) ? rawMax : 10;
  const sort = document.getElementById('sortFilter').value;
  const year = document.getElementById('yearFilter').value;

  let filtered = games.filter(g => {
    if (search && !g.name.toLowerCase().includes(search) && !g.genre.toLowerCase().includes(search)) return false;
    if (g.score < minScore) return false;
    if (g.score > maxScore) return false;
    if (activeGenre && g.genre !== activeGenre) return false;
    if (year && getYear(g.date) !== parseInt(year)) return false;
    return true;
  });

  if (sort === 'score-desc') filtered.sort((a, b) => b.score - a.score);
  else if (sort === 'score-asc') filtered.sort((a, b) => a.score - b.score);
  else if (sort === 'date') filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (sort === 'date-asc') filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));

  renderCards(filtered);
}

// Genre buttons
function initGenreButtons() {
  const genres = [...new Set(games.map(g => g.genre))].sort();
  const container = document.getElementById('genreButtons');
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = 'All';
  allBtn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    activeGenre = '';
    applyFilters();
  };
  container.appendChild(allBtn);

  genres.forEach(genre => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = genre;
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGenre = genre;
      applyFilters();
    };
    container.appendChild(btn);
  });
}

function toggleFilters(open) {
  document.getElementById('filterPanel').classList.toggle('open', open);
  document.getElementById('filterBackdrop').classList.toggle('open', open);
}

document.addEventListener('DOMContentLoaded', () => {
  initGenreButtons();
  applyFilters();
  document.getElementById('search').addEventListener('input', applyFilters);
  document.getElementById('minScore').addEventListener('input', () => {
    document.getElementById('scoreValue').textContent = document.getElementById('minScore').value;
    applyFilters();
  });
  document.getElementById('maxScore').addEventListener('input', () => {
    document.getElementById('maxScoreValue').textContent = document.getElementById('maxScore').value;
    applyFilters();
  });
  document.getElementById('sortFilter').addEventListener('change', applyFilters);
  document.getElementById('yearFilter').addEventListener('change', applyFilters);

  document.getElementById('filterToggle').addEventListener('click', () => toggleFilters(true));
  document.getElementById('filterClose').addEventListener('click', () => toggleFilters(false));
  document.getElementById('filterBackdrop').addEventListener('click', () => toggleFilters(false));
});