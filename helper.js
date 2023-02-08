window.table_1_page = 0;
window.table_3_page = 0;
window.table_4_page = 0;
function paginateTable(table_name, page, page_state_name) {
  let current_page = window[page_state_name];
  if (current_page === page) {
  	return;
  }

  let active_button = document.getElementById(table_name + "-page-" + current_page.toString() + '-button');
  active_button.parentElement.classList.toggle("active");
  let active_rows = document.getElementById(table_name + "-page-" + current_page.toString());
  active_rows.toggleAttribute("hidden");

  window[page_state_name] = page;
  let next_button = document.getElementById(table_name + "-page-" + page.toString() + '-button');
  next_button.parentElement.classList.toggle('active');
  let next_rows = document.getElementById(table_name + "-page-" + page.toString());
  next_rows.toggleAttribute("hidden");
  let audio_players = next_rows.getElementsByTagName('audio');
  for (let audio_player of audio_players) {
  	audio_player.setAttribute("preload", "auto");
  }
}

window.table_2_group = 0;
window.table_2_page = [0, 0, 0, 0, 0, 0];

function paginateGroupedTable(table_name, group, page, page_state_name) {
  let current_page = window[page_state_name][group];
  if (current_page === page) {
  	return;
  }

  let active_button = document.getElementById(table_name + "-group-" + group.toString() + "-page-" + current_page.toString() + '-button');
  active_button.parentElement.classList.toggle("active");
  let active_rows = document.getElementById(table_name + "-group-" + group.toString() + "-page-" + current_page.toString());
  active_rows.toggleAttribute("hidden");

  window[page_state_name][group] = page;
  let next_button = document.getElementById(table_name + "-group-" + group.toString() + "-page-" + page.toString() + '-button');
  next_button.parentElement.classList.toggle('active');
  let next_rows = document.getElementById(table_name + "-group-" + group.toString() + "-page-" + page.toString());
  next_rows.toggleAttribute("hidden");
  let audio_players = next_rows.getElementsByTagName('audio');
  for (let audio_player of audio_players) {
  	audio_player.setAttribute("preload", "auto");
  }
}

function changeGroupTable(table_name, group, group_state_name, page_state_name) {
  let current_group = window[group_state_name];
  if (current_group == group) {
  	return;
  }

  let current_group_button = document.getElementById(table_name + "-group-" + current_group.toString() + "-button");
  current_group_button.classList.toggle("active");
  let current_page = window[page_state_name][current_group];
  let active_rows = document.getElementById(table_name + "-group-" + current_group.toString() + "-page-" + current_page.toString());
  active_rows.toggleAttribute("hidden");
  let active_pagination = document.getElementById(table_name + "-group-" + current_group.toString() + "-pagination");
  active_pagination.toggleAttribute("hidden");

  window[group_state_name] = group;
  let next_group_button = document.getElementById(table_name + "-group-" + group.toString() + "-button");
  next_group_button.classList.toggle("active");
  let next_page = window[page_state_name][group];
  let next_pagination = document.getElementById(table_name + "-group-" + group.toString() + "-pagination");
  next_pagination.toggleAttribute("hidden");
  let next_rows = document.getElementById(table_name + "-group-" + group.toString() + "-page-" + next_page.toString());
  next_rows.toggleAttribute("hidden");
  let audio_players = next_rows.getElementsByTagName('audio');
  for (let audio_player of audio_players) {
  	audio_player.setAttribute("preload", "auto");
  }
}