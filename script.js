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

case 'reading':
  activitySection.innerHTML = `
    <h2>Reading Activity</h2>
    <p><strong>Passage:</strong> The sun was shining brightly. The children played outside and laughed together.</p>
    <p>Question: What were the children doing?</p>
    <button onclick="checkAnswer('playing')">They were playing</button>
    <button onclick="checkAnswer('sleeping')">They were sleeping</button>
    <button onclick="checkAnswer('eating')">They were eating</button>
  `;
  break;
