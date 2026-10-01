const questions = [
  {
    id: 'intro',
    text: 'Tell us about yourself and what drew you to education.',
    tags: ['general'],
    seconds: 90,
    guide: [
      'Give a short professional overview, not your full life story.',
      'Connect your experiences to the kind of educator you are becoming.',
      'End with why this role or school is a good next step.'
    ],
    help: [
      ['Simple structure', 'Present → past experience that shaped you → why this role now.'],
      ['Keep it focused', 'Choose 2–3 details that matter for the role instead of listing everything on your resume.']
    ]
  },
  {
    id: 'classroom-management',
    text: 'How would you build a positive classroom environment and respond when behavior becomes challenging?',
    tags: ['general', 'elementary', 'secondary', 'behavior'],
    seconds: 120,
    guide: [
      'Describe how you prevent problems through routines, relationships, and clear expectations.',
      'Explain how you would respond calmly and consistently when a concern happens.',
      'Include how you help students repair, reflect, and rejoin learning.'
    ],
    help: [
      ['Think prevention first', 'Interviewers often want to hear more than consequences. Talk about expectations, routines, relationships, and reinforcement.'],
      ['Use an example', 'If possible, describe a real situation and what changed because of your response.']
    ]
  },
  {
    id: 'differentiation',
    text: 'How do you plan instruction so students with different strengths and needs can all make progress?',
    tags: ['general', 'elementary', 'secondary', 'special-education', 'inclusion', 'data'],
    seconds: 120,
    guide: [
      'Start with the learning goal and explain how you identify what students need.',
      'Give examples of supports, choices, scaffolds, or extensions.',
      'Explain how you check whether the approach is working.'
    ],
    help: [
      ['Helpful language', 'You might discuss formative assessment, flexible grouping, accommodations, scaffolding, student choice, or multiple ways to show learning.'],
      ['Avoid the trap', 'Do not make differentiation sound like creating a completely different lesson for every student.']
    ]
  },
  {
    id: 'data',
    text: 'Tell us about a time you used student data or evidence to adjust your approach.',
    tags: ['general', 'elementary', 'secondary', 'special-education', 'data'],
    seconds: 120,
    guide: [
      'Name the evidence you used: observations, assessment results, work samples, behavior patterns, or another source.',
      'Explain what you noticed and what you changed.',
      'Describe the result or what you learned next.'
    ],
    help: [
      ['Use STAR', 'Situation → Task → Action → Result works well for this question.'],
      ['Data can be small', 'You do not need a spreadsheet. A pattern you noticed in student work or behavior can count as useful evidence.']
    ]
  },
  {
    id: 'family',
    text: 'How would you build productive relationships with families, especially when there is a concern to discuss?',
    tags: ['general', 'elementary', 'secondary', 'family'],
    seconds: 105,
    guide: [
      'Emphasize proactive, respectful communication before problems arise.',
      'Explain how you would listen, share specific observations, and focus on the student.',
      'Show how you would work toward a shared next step.'
    ],
    help: [
      ['Balance matters', 'Strong answers usually show both warmth and professionalism.'],
      ['Be concrete', 'Mention communication methods or how you would prepare for a difficult conversation.']
    ]
  },
  {
    id: 'collaboration',
    text: 'Describe a time you worked with another educator or support professional to help a student succeed.',
    tags: ['general', 'collaboration', 'special-education', 'school-counseling', 'student-services'],
    seconds: 120,
    guide: [
      'Clarify the student need and who was involved.',
      'Explain your specific contribution to the collaboration.',
      'Share the outcome, adjustment, or lesson you took from the experience.'
    ],
    help: [
      ['Show your role', 'Avoid saying only “we.” Interviewers need to understand what you personally contributed.'],
      ['Collaboration is not agreement', 'A useful example can include navigating different perspectives respectfully.']
    ]
  },
  {
    id: 'equity',
    text: 'How do you make sure students feel seen, respected, and included in your classroom or learning environment?',
    tags: ['general', 'equity', 'inclusion', 'sel'],
    seconds: 120,
    guide: [
      'Describe specific routines or choices that support belonging.',
      'Explain how you learn about students rather than making assumptions.',
      'Connect inclusion to access, participation, and high expectations.'
    ],
    help: [
      ['Go beyond slogans', 'Use a concrete example: materials, names and identities, participation structures, accessibility, classroom norms, or relationship-building.'],
      ['Hold high expectations', 'Inclusive practice can include support and challenge at the same time.']
    ]
  },
  {
    id: 'technology',
    text: 'How do you decide when technology will improve learning rather than simply add another tool?',
    tags: ['general', 'technology'],
    seconds: 90,
    guide: [
      'Start with the learning goal, not the technology.',
      'Give an example where technology improved access, feedback, engagement, or efficiency.',
      'Acknowledge that sometimes a lower-tech option is better.'
    ],
    help: [
      ['Strong framing', 'Technology should serve instruction, access, or communication—not be used just because it is available.'],
      ['One example is enough', 'Choose one tool and explain why it helped.']
    ]
  },
  {
    id: 'elementary-engagement',
    text: 'How would you keep elementary students actively engaged during a lesson while still maintaining clear routines?',
    tags: ['elementary', 'early', 'upper-elementary'],
    seconds: 105,
    guide: [
      'Explain how you break learning into manageable chunks.',
      'Include opportunities for movement, talk, checks for understanding, or hands-on participation.',
      'Describe how routines make active learning feel structured.'
    ],
    help: [
      ['Think rhythm', 'A strong answer often shows how you move between mini-lesson, practice, discussion, and feedback.'],
      ['Engagement is not entertainment', 'Focus on meaningful participation connected to the learning goal.']
    ]
  },
  {
    id: 'secondary-relevance',
    text: 'How do you make learning relevant and motivating for secondary students who may not immediately see the value in the content?',
    tags: ['secondary', 'middle', 'high'],
    seconds: 105,
    guide: [
      'Connect content to authentic problems, choices, interests, or future use when appropriate.',
      'Explain how you balance relevance with required learning goals.',
      'Give an example of how you would respond to low motivation.'
    ],
    help: [
      ['Avoid overpromising', 'You do not need to make every lesson “fun.” Show how you build purpose, autonomy, and attainable challenge.'],
      ['Use student voice carefully', 'Choice can be powerful when it still supports the learning target.']
    ]
  },
  {
    id: 'sped-iep',
    text: 'How would you use an IEP to support a student while still promoting independence and participation in the learning environment?',
    tags: ['special-education', 'inclusion'],
    seconds: 120,
    guide: [
      'Show that accommodations and goals guide planning rather than being added at the end.',
      'Explain collaboration with the student, family, and educational team.',
      'Describe how you support access while helping the student build independence.'
    ],
    help: [
      ['Keep it student-centered', 'Talk about the learner, not just compliance or paperwork.'],
      ['Differentiate terms', 'Accommodations change access; modifications change what is expected to be learned.']
    ]
  },
  {
    id: 'counseling-crisis',
    text: 'A student comes to you visibly upset and says they cannot return to class. How would you respond?',
    tags: ['school-counseling', 'student-services', 'sel'],
    seconds: 120,
    guide: [
      'Start with immediate safety and emotional regulation.',
      'Gather enough information to understand the concern without turning the moment into a full investigation.',
      'Explain how you would determine next steps, document appropriately, and involve others when needed.'
    ],
    help: [
      ['Show calm process', 'Interviewers are often listening for safety, rapport, boundaries, and judgment.'],
      ['Know your role', 'Avoid promising confidentiality or handling serious concerns completely on your own.']
    ]
  },
  {
    id: 'lesson-reflection',
    text: 'Tell us about a lesson, activity, or interaction that did not go as planned. What did you do next?',
    tags: ['general', 'elementary', 'secondary', 'specialty'],
    seconds: 120,
    guide: [
      'Choose a real example without blaming students.',
      'Explain how you noticed the problem and adjusted in the moment or afterward.',
      'End with what changed in your future practice.'
    ],
    help: [
      ['This is not a trick question', 'They are often looking for reflection, adaptability, and growth.'],
      ['Own the learning', 'A strong answer can describe a mistake if you clearly show what you learned from it.']
    ]
  },
  {
    id: 'why-school',
    text: 'Why are you interested in this school or district?',
    tags: ['general', 'screening', 'panel', 'final'],
    seconds: 90,
    guide: [
      'Name something specific you learned about the school, district, or community.',
      'Connect it to your experiences, values, or teaching approach.',
      'Avoid giving an answer that could apply to any school.'
    ],
    help: [
      ['Before the interview', 'Review the school and district websites, strategic priorities, recent news or social posts, and the job posting.'],
      ['Best connection', 'Try: “I noticed X. That stood out because in my experience Y, and I would be excited to contribute by Z.”']
    ]
  },
  {
    id: 'student-conflict',
    text: 'How would you respond if two students were in conflict and each believed the other person was at fault?',
    tags: ['general', 'elementary', 'secondary', 'behavior', 'sel'],
    seconds: 105,
    guide: [
      'Separate immediate safety from the later problem-solving conversation.',
      'Explain how you would listen to each student and avoid deciding too quickly.',
      'Describe how you would help them repair the situation and return to learning.'
    ],
    help: [
      ['Useful lens', 'Think regulate → understand → problem-solve → repair → follow up.'],
      ['Avoid extremes', 'Do not make the answer only punitive or imply students should solve serious conflict alone.']
    ]
  },
  {
    id: 'specialty',
    text: 'How would you advocate for the value of your specialty area while still supporting the broader goals of the school?',
    tags: ['specialty', 'collaboration'],
    seconds: 105,
    guide: [
      'Explain the unique value your area brings to student learning and development.',
      'Show that you understand your role as part of the whole school.',
      'Give an example of collaboration across content areas or school priorities.'
    ],
    help: [
      ['Connect, do not compete', 'Frame your specialty as strengthening broader student goals rather than competing for attention.'],
      ['Use outcomes', 'Consider skills, belonging, confidence, creativity, wellness, or academic transfer depending on your area.']
    ]
  }
];

const setupScreen = document.getElementById('setup-screen');
const practiceScreen = document.getElementById('practice-screen');
const roleType = document.getElementById('role-type');
const gradeLevel = document.getElementById('grade-level');
const subjectArea = document.getElementById('subject-area');
const interviewStage = document.getElementById('interview-stage');
const focusInputs = [...document.querySelectorAll('#school-focus-options input')];
const questionText = document.getElementById('practice-title');
const questionMeta = document.getElementById('question-meta');
const guideList = document.getElementById('guide-list');
const helpCard = document.getElementById('help-card');
const helpContent = document.getElementById('help-content');
const notes = document.getElementById('practice-notes');
const timerDisplay = document.getElementById('timer-display');
const timerToggle = document.getElementById('timer-toggle');

let profile = null;
let currentQuestion = null;
let recentQuestionIds = [];
let timerSeconds = 90;
let timerRemaining = 90;
let timerInterval = null;

function getProfile() {
  return {
    role: roleType.value,
    grade: gradeLevel.value,
    subject: subjectArea.value.trim(),
    stage: interviewStage.value,
    focuses: focusInputs.filter(input => input.checked).map(input => input.value)
  };
}

function hasProfileInfo(p) {
  return Boolean(p.role || p.grade || p.subject || p.stage || p.focuses.length);
}

function scoreQuestion(question, p) {
  let score = question.tags.includes('general') ? 2 : 0;
  const values = [p.role, p.grade, p.stage, ...p.focuses].filter(Boolean);
  values.forEach(value => {
    if (question.tags.includes(value)) score += 4;
  });
  if (p.subject && question.tags.includes('specialty')) score += 2;
  if (recentQuestionIds.includes(question.id)) score -= 100;
  return score;
}

function chooseQuestion() {
  const p = profile || { role: '', grade: '', subject: '', stage: '', focuses: [] };
  const scored = questions.map(q => ({ q, score: scoreQuestion(q, p) }));
  const maxScore = Math.max(...scored.map(item => item.score));
  let candidatePool = scored.filter(item => item.score >= Math.max(2, maxScore - 3));

  if (!candidatePool.length) {
    candidatePool = scored.filter(item => item.q.tags.includes('general') && !recentQuestionIds.includes(item.q.id));
  }

  const choice = candidatePool[Math.floor(Math.random() * candidatePool.length)].q;
  recentQuestionIds.push(choice.id);
  if (recentQuestionIds.length > 6) recentQuestionIds.shift();
  return choice;
}

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerToggle.textContent = 'Start timer';
}

function resetTimer() {
  stopTimer();
  timerRemaining = timerSeconds;
  timerDisplay.textContent = formatTime(timerRemaining);
  timerDisplay.classList.remove('done');
}

function startTimer() {
  if (timerInterval) {
    stopTimer();
    timerToggle.textContent = 'Resume timer';
    return;
  }

  if (timerRemaining <= 0) resetTimer();
  timerToggle.textContent = 'Pause timer';
  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    timerDisplay.textContent = formatTime(Math.max(timerRemaining, 0));
    if (timerRemaining <= 0) {
      stopTimer();
      timerDisplay.classList.add('done');
      timerToggle.textContent = 'Restart timer';
    }
  }, 1000);
}

function buildMeta(q) {
  const parts = [];
  if (profile?.role) {
    const selected = roleType.options[roleType.selectedIndex]?.text;
    if (selected && !selected.includes('skip')) parts.push(selected);
  }
  if (profile?.grade) {
    const selected = gradeLevel.options[gradeLevel.selectedIndex]?.text;
    if (selected && !selected.includes('skip')) parts.push(selected);
  }
  if (profile?.subject) parts.push(profile.subject);
  if (!parts.length) return 'Common educator interview question';
  return `Tailored practice · ${parts.slice(0, 2).join(' · ')}`;
}

function renderQuestion() {
  currentQuestion = chooseQuestion();
  questionText.textContent = currentQuestion.text;
  questionMeta.textContent = buildMeta(currentQuestion);

  guideList.innerHTML = '';
  currentQuestion.guide.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    guideList.appendChild(li);
  });

  helpContent.innerHTML = currentQuestion.help.map(([title, text]) => `
    <div class="help-tip"><strong>${title}</strong><span>${text}</span></div>
  `).join('');

  helpCard.classList.add('hidden');
  document.getElementById('show-help').textContent = 'Show answer help';
  notes.value = '';
  timerSeconds = currentQuestion.seconds;
  resetTimer();
}

function startPractice(useProfile = true) {
  profile = useProfile ? getProfile() : { role: '', grade: '', subject: '', stage: '', focuses: [] };
  recentQuestionIds = [];
  setupScreen.classList.remove('active');
  practiceScreen.classList.add('active');
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('start-practice').addEventListener('click', () => startPractice(true));
document.getElementById('skip-setup').addEventListener('click', () => startPractice(false));
document.getElementById('next-question').addEventListener('click', renderQuestion);
document.getElementById('timer-toggle').addEventListener('click', startTimer);
document.getElementById('timer-reset').addEventListener('click', resetTimer);

document.getElementById('show-help').addEventListener('click', () => {
  const hidden = helpCard.classList.toggle('hidden');
  document.getElementById('show-help').textContent = hidden ? 'Show answer help' : 'Hide answer help';
});

document.getElementById('reset-session').addEventListener('click', () => {
  stopTimer();
  practiceScreen.classList.remove('active');
  setupScreen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
