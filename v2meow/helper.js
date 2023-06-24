window.table_1_page = 0;
window.table_2_page = 0;
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
