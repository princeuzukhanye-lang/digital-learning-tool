function startActivity(skill) {
  const activitySection = document.getElementById('activity');
  switch(skill) {
    case 'speaking':
      activitySection.innerHTML = "<h2>Speaking Activity</h2><p>Repeat the word: <strong>Apple</strong></p>";
      break;
    case 'listening':
      activitySection.innerHTML = "<h2>Listening Activity</h2><p>Listen to the audio and answer the question.</p>";
      break;
    case 'reading':
      activitySection.innerHTML = "<h2>Reading Activity</h2><p>Read the short passage and answer comprehension questions.</p>";
      break;
    case 'writing':
      activitySection.innerHTML = "<h2>Writing Activity</h2><p>Write a sentence using the word <strong>school</strong>.</p>";
      break;
    default:
      activitySection.innerHTML = "<p>Select a skill to begin!</p>";
  }
}
