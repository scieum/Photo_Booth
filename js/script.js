// ===== 과학자 데이터 =====
const scientists = {
    einstein: {
        name: "알베르트 아인슈타인",
        nameEn: "Albert Einstein (1879-1955)",
        image: "image/Einstein.png",
        emoji: "",
        type: "창의적 몽상가",
        quote: "\"상상력은 지식보다 중요하다. 지식은 한계가 있지만, 상상력은 세상 모든 것을 끌어안는다.\"",
        desc: "당신은 아인슈타인처럼 남들과 다른 시각으로 세상을 바라보는 사람이에요! 기존의 틀에 얽매이지 않고 자유롭게 사고하며, 머릿속에서 사고 실험을 즐기는 타입이죠. 혼자만의 시간에 깊은 생각에 빠지는 것을 좋아하고, 우주와 자연의 근본적인 원리에 끝없는 호기심을 가지고 있어요.",
        traits: ["#자유로운_사고", "#상상력_폭발", "#우주_덕후", "#독창적", "#직관형"],
        color: "#6c5ce7"
    },
    curie: {
        name: "마리 퀴리",
        nameEn: "Marie Curie (1867-1934)",
        image: "image/Curie.png",
        emoji: "",
        type: "끈기의 탐구자",
        quote: "\"인생에서 두려워할 것은 아무것도 없다. 다만 이해해야 할 것이 있을 뿐이다.\"",
        desc: "당신은 마리 퀴리처럼 한 번 시작하면 끝까지 파고드는 집념의 소유자예요! 어떤 어려움이 와도 포기하지 않고 꾸준히 연구하는 타입이죠. 실험을 통해 직접 확인하는 것을 좋아하고, 겸손하지만 내면에 불꽃 같은 열정을 가지고 있어요. 노벨상을 두 번이나 받은 것처럼, 당신의 끈기는 반드시 빛을 발할 거예요!",
        traits: ["#끈기_최강", "#실험_덕후", "#겸손한_열정", "#독립적", "#집중력_만렙"],
        color: "#00b894"
    },
    newton: {
        name: "아이작 뉴턴",
        nameEn: "Isaac Newton (1643-1727)",
        image: "image/Newton.png",
        emoji: "",
        type: "논리적 분석가",
        quote: "\"내가 더 멀리 보았다면, 그것은 거인들의 어깨 위에 서 있었기 때문이다.\"",
        desc: "당신은 뉴턴처럼 논리적이고 체계적으로 사고하는 분석가 타입이에요! 복잡한 현상 속에서 핵심 법칙을 찾아내는 능력이 뛰어나고, 수학적 사고를 즐기는 편이죠. 혼자 조용히 연구하는 것을 선호하며, 한 가지 주제에 깊이 몰입하면 시간 가는 줄 모르는 타입이에요.",
        traits: ["#논리적_사고", "#수학_천재", "#깊은_몰입", "#체계적", "#분석형"],
        color: "#0984e3"
    },
    darwin: {
        name: "찰스 다윈",
        nameEn: "Charles Darwin (1809-1882)",
        image: "image/Darwin.png",
        emoji: "",
        type: "관찰의 모험가",
        quote: "\"살아남는 종은 가장 강한 종이 아니라, 변화에 가장 잘 적응하는 종이다.\"",
        desc: "당신은 다윈처럼 세상을 주의 깊게 관찰하고 패턴을 발견하는 타입이에요! 자연과 생명에 대한 깊은 관심을 가지고 있고, 직접 발로 뛰며 탐험하는 것을 좋아해요. 성급하게 결론 짓기보다는 충분한 증거를 모은 후 신중하게 판단하는 편이며, 열린 마음으로 새로운 것을 받아들이는 유연함이 있어요.",
        traits: ["#관찰력_만렙", "#자연_사랑", "#모험가", "#신중한_판단", "#유연한_사고"],
        color: "#00b894"
    },
    tesla: {
        name: "니콜라 테슬라",
        nameEn: "Nikola Tesla (1856-1943)",
        image: "image/Tesla.png",
        emoji: "",
        type: "미래를 꿈꾸는 발명가",
        quote: "\"현재는 그들의 것이지만, 내가 위해 일한 미래는 나의 것이다.\"",
        desc: "당신은 테슬라처럼 시대를 앞서가는 비전을 가진 발명가 타입이에요! 남들이 불가능하다고 하는 것에 도전하고, 완전히 새로운 것을 만들어내는 데 열정을 쏟는 편이죠. 머릿속에서 완벽한 설계도를 그릴 수 있는 뛰어난 상상력을 가지고 있고, 미래 기술에 대한 관심이 남다릅니다.",
        traits: ["#미래지향적", "#발명_천재", "#비전가", "#대담한_도전", "#완벽주의"],
        color: "#fdcb6e"
    },
    feynman: {
        name: "리처드 파인만",
        nameEn: "Richard Feynman (1918-1988)",
        image: "image/Feynman.png",
        emoji: "",
        type: "즐거운 소통가",
        quote: "\"모르는 것과 함께 사는 것, 그것이야말로 과학이다.\"",
        desc: "당신은 파인만처럼 과학을 재미있게 즐기고 나누는 소통가 타입이에요! 어려운 개념도 쉽고 재미있게 설명하는 능력이 있고, 호기심이 넘쳐서 다양한 분야에 관심을 가지는 편이죠. 유머 감각이 뛰어나고 사람들과 어울리는 것을 좋아하며, 문제를 풀 때도 장난스럽고 창의적인 방법을 찾아요.",
        traits: ["#소통_능력자", "#유머_감각", "#다재다능", "#호기심_대장", "#재미_추구"],
        color: "#e17055"
    },
    edison: {
        name: "토마스 에디슨",
        nameEn: "Thomas Edison (1847-1931)",
        image: "image/Edison.png",
        emoji: "",
        type: "실용적 혁신가",
        quote: "\"천재란 1%의 영감과 99%의 노력으로 이루어진다.\"",
        desc: "당신은 에디슨처럼 실용적인 기술로 세상을 바꾸는 혁신가 타입이에요! 이론보다는 직접 만들고 실험하는 것을 좋아하고, 사람들의 실제 문제를 해결하는 데 보람을 느끼는 편이죠. 수천 번의 실패에도 좌절하지 않는 끈기가 있고, 팀워크를 중요시하며 함께 성과를 만들어내는 타입이에요.",
        traits: ["#만들기_장인", "#실용주의", "#팀워크", "#노력형_천재", "#문제_해결사"],
        color: "#636e72"
    },
    pasteur: {
        name: "루이 파스퇴르",
        nameEn: "Louis Pasteur (1822-1895)",
        image: "image/Pasteur.png",
        emoji: "",
        type: "따뜻한 치유자",
        quote: "\"과학에는 국경이 없다. 지식은 인류의 것이며, 세상을 밝히는 횃불이다.\"",
        desc: "당신은 파스퇴르처럼 사람을 향한 따뜻한 마음으로 과학을 하는 타입이에요! 백신과 살균법을 개발해 수많은 생명을 구한 것처럼, 과학 지식을 사람들을 돕는 데 활용하고 싶어하는 편이죠. 꼼꼼하게 기록하고 정리하는 것을 잘하고, 다른 사람의 아픔에 공감하며 헌신하는 따뜻한 마음의 소유자예요.",
        traits: ["#따뜻한_마음", "#공감_능력", "#꼼꼼한_기록", "#헌신적", "#생명_존중"],
        color: "#fd79a8"
    }
};

// ===== 퀴즈 질문 데이터 =====
const questions = [
    {
        text: "친구들과 모였을 때, 나는 주로...",
        options: [
            {
                label: "A",
                text: "새로운 아이디어를 신나게 이야기한다",
                scores: { feynman: 3, einstein: 1, tesla: 1 }
            },
            {
                label: "B",
                text: "다른 사람의 이야기를 관찰하며 듣는다",
                scores: { darwin: 3, newton: 1, pasteur: 1 }
            },
            {
                label: "C",
                text: "같이 뭔가 만들거나 실험해보자고 한다",
                scores: { edison: 3, curie: 1, feynman: 1 }
            },
            {
                label: "D",
                text: "조용히 생각하다가 핵심 한마디를 한다",
                scores: { newton: 3, einstein: 2, tesla: 1 }
            }
        ]
    },
    {
        text: "가장 재미있게 느껴지는 과목은?",
        options: [
            {
                label: "A",
                text: "수학 — 공식과 증명이 아름답다",
                scores: { newton: 3, einstein: 2 }
            },
            {
                label: "B",
                text: "생물 — 생명의 신비가 궁금하다",
                scores: { darwin: 3, pasteur: 2 }
            },
            {
                label: "C",
                text: "물리 — 세상이 어떻게 돌아가는지 알고 싶다",
                scores: { einstein: 3, feynman: 2, tesla: 1 }
            },
            {
                label: "D",
                text: "기술/공학 — 직접 만들어보는 게 최고!",
                scores: { edison: 3, tesla: 2, curie: 1 }
            }
        ]
    },
    {
        text: "내가 과학자가 된다면 하고 싶은 일은?",
        options: [
            {
                label: "A",
                text: "아무도 몰랐던 새로운 사실을 발견하고 싶다",
                scores: { curie: 3, darwin: 2, newton: 1 }
            },
            {
                label: "B",
                text: "세상을 바꿀 놀라운 발명을 하고 싶다",
                scores: { tesla: 3, edison: 2, einstein: 1 }
            },
            {
                label: "C",
                text: "사람들에게 과학의 재미를 알려주고 싶다",
                scores: { feynman: 3, pasteur: 1 }
            },
            {
                label: "D",
                text: "어려운 사람들을 돕는 기술을 만들고 싶다",
                scores: { pasteur: 3, edison: 2, curie: 1 }
            }
        ]
    },
    {
        text: "지금 당장 갈 수 있다면 어디로?",
        options: [
            {
                label: "A",
                text: "우주 정거장 — 별과 은하의 세계!",
                scores: { einstein: 3, tesla: 2 }
            },
            {
                label: "B",
                text: "갈라파고스 — 미지의 생물들이 가득한 곳",
                scores: { darwin: 3, pasteur: 1 }
            },
            {
                label: "C",
                text: "최첨단 연구소 — 실험 장비가 가득한 곳",
                scores: { curie: 3, newton: 2, edison: 1 }
            },
            {
                label: "D",
                text: "세계 과학 축제 — 과학자들과 만나는 곳",
                scores: { feynman: 3, edison: 1, pasteur: 1 }
            }
        ]
    },
    {
        text: "노트나 스케치북을 펼쳤을 때 나는...",
        options: [
            {
                label: "A",
                text: "수식과 도식으로 빼곡하게 정리한다",
                scores: { newton: 3, einstein: 2, curie: 1 }
            },
            {
                label: "B",
                text: "관찰한 것을 그림과 주석으로 기록한다",
                scores: { darwin: 3, pasteur: 2 }
            },
            {
                label: "C",
                text: "머릿속 아이디어를 설계도처럼 그린다",
                scores: { tesla: 3, edison: 2 }
            },
            {
                label: "D",
                text: "낙서 같지만 재밌는 예시와 비유가 많다",
                scores: { feynman: 3, einstein: 1 }
            }
        ]
    },
    {
        text: "팀 프로젝트에서 내 포지션은?",
        options: [
            {
                label: "A",
                text: "혼자 깊이 파고드는 스페셜리스트",
                scores: { newton: 3, curie: 2, einstein: 1 }
            },
            {
                label: "B",
                text: "팀원들과 아이디어를 나누는 커넥터",
                scores: { feynman: 3, edison: 2, pasteur: 1 }
            },
            {
                label: "C",
                text: "실제로 구현하고 만드는 실행가",
                scores: { edison: 3, tesla: 2 }
            },
            {
                label: "D",
                text: "자료를 모으고 정리하는 신중한 분석가",
                scores: { darwin: 3, pasteur: 2, newton: 1 }
            }
        ]
    },
    {
        text: "실패한 실험 앞에서 내 반응은?",
        options: [
            {
                label: "A",
                text: "\"한 번 더.\" 같은 방법을 집요하게 다시 시도",
                scores: { curie: 3, edison: 2 }
            },
            {
                label: "B",
                text: "왜 실패했는지 원리부터 되짚어본다",
                scores: { newton: 3, einstein: 2 }
            },
            {
                label: "C",
                text: "아예 다른 관점으로 접근을 갈아엎는다",
                scores: { einstein: 2, tesla: 3, feynman: 1 }
            },
            {
                label: "D",
                text: "사람들에게 조언을 구하고 같이 고민한다",
                scores: { feynman: 2, edison: 2, pasteur: 2 }
            }
        ]
    },
    {
        text: "세상에서 가장 멋있다고 느껴지는 순간은?",
        options: [
            {
                label: "A",
                text: "아무도 풀지 못한 난제의 실마리를 발견했을 때",
                scores: { newton: 3, einstein: 2, curie: 1 }
            },
            {
                label: "B",
                text: "자연 현상에서 숨겨진 규칙을 찾아냈을 때",
                scores: { darwin: 3, einstein: 1 }
            },
            {
                label: "C",
                text: "내가 만든 것이 누군가의 삶을 편하게 했을 때",
                scores: { edison: 3, tesla: 2, pasteur: 2 }
            },
            {
                label: "D",
                text: "어려운 과학을 친구에게 쉽게 설명해줬을 때",
                scores: { feynman: 3, pasteur: 1 }
            }
        ]
    }
];

// ===== 전역 상태 =====
let currentQuestion = 0;
let scores = {};
let matchedScientist = null;

// ===== 초기화 =====
function init() {
    createParticles();
    resetScores();
}

function resetScores() {
    scores = {};
    Object.keys(scientists).forEach(key => {
        scores[key] = 0;
    });
}

// ===== 파티클 배경 생성 =====
function createParticles() {
    const container = document.getElementById('particles');
    const count = 20;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (12 + Math.random() * 18) + 's';
        particle.style.animationDelay = Math.random() * 12 + 's';
        const size = (2 + Math.random() * 3) + 'px';
        particle.style.width = size;
        particle.style.height = size;
        const colors = ['#06b6d4', '#0891b2', '#67e8f9', '#a5f3fc'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);
    }
}

// ===== 화면 전환 =====
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ===== 퀴즈 시작 =====
function startQuiz() {
    currentQuestion = 0;
    resetScores();
    showScreen('quiz');
    renderQuestion();
}

// ===== 질문 렌더링 =====
function renderQuestion() {
    const q = questions[currentQuestion];
    const area = document.getElementById('questionArea');

    // 진행률
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQ').textContent = currentQuestion + 1;
    const totalEl = document.getElementById('totalQ');
    if (totalEl) totalEl.textContent = questions.length;

    // 애니메이션을 위해 잠시 숨김
    area.style.opacity = '0';
    area.style.transform = 'translateY(8px)';

    setTimeout(() => {
        let html = `<h2 class="question-text">${q.text}</h2><div class="options">`;
        q.options.forEach((opt, i) => {
            html += `
                <button class="option-btn" onclick="selectOption(${i})">
                    <span class="option-label">${opt.label}</span>
                    <span class="option-text">${opt.text}</span>
                </button>`;
        });
        html += `</div>`;
        area.innerHTML = html;

        // 트랜지션
        requestAnimationFrame(() => {
            area.style.transition = 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)';
            area.style.opacity = '1';
            area.style.transform = 'translateY(0)';
        });
    }, 150);
}

// ===== 옵션 선택 =====
function selectOption(index) {
    const q = questions[currentQuestion];
    const opt = q.options[index];

    // 선택 시각효과
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');

    // 점수 추가
    Object.entries(opt.scores).forEach(([scientist, score]) => {
        scores[scientist] += score;
    });

    // 다음 질문 또는 결과
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            document.getElementById('progressFill').style.width = '100%';
            showAnalyzing();
        }
    }, 400);
}

// ===== 분석 화면 =====
function showAnalyzing() {
    showScreen('analyzing');

    const messages = [
        "당신의 과학적 성향을 분석하고 있습니다",
        "역대 과학자들의 성격 데이터와 비교 중...",
        "최적의 과학자를 매칭하고 있습니다",
        "거의 다 됐어요!"
    ];

    let msgIndex = 0;
    const textEl = document.getElementById('analyzingText');

    const interval = setInterval(() => {
        msgIndex++;
        if (msgIndex < messages.length) {
            textEl.style.opacity = '0';
            setTimeout(() => {
                textEl.textContent = messages[msgIndex];
                textEl.style.opacity = '1';
            }, 300);
        }
    }, 700);

    setTimeout(() => {
        clearInterval(interval);
        calculateResult();
    }, 2800);
}

// ===== 결과 계산 =====
async function calculateResult() {
    // 최고 점수 과학자 찾기
    let maxScore = 0;
    let matchKey = 'einstein';

    Object.entries(scores).forEach(([key, score]) => {
        if (score > maxScore) {
            maxScore = score;
            matchKey = key;
        }
    });

    matchedScientist = matchKey;
    const s = scientists[matchKey];

    // 결과 렌더링
    const portrait = document.getElementById('scientistPortrait');
    if (s.image) {
        try {
            portrait.src = await preparePortrait(s.image);
        } catch (_) {
            portrait.src = s.image; // 실패 시 원본
        }
        portrait.alt = s.name;
        portrait.hidden = false;
    } else {
        portrait.hidden = true;
    }
    document.getElementById('scientistType').textContent = s.type;
    document.getElementById('scientistName').textContent = s.name;
    document.getElementById('scientistNameEn').textContent = s.nameEn;
    document.getElementById('scientistQuote').textContent = s.quote;
    document.getElementById('scientistDesc').textContent = s.desc;

    // 특성 태그 — "#" 접두사 제거하고 깔끔한 라벨로
    const traitsHtml = s.traits
        .map(t => `<li>${t.replace(/^#/, '').replace(/_/g, ' ')}</li>`)
        .join('');
    document.getElementById('scientistTraits').innerHTML = traitsHtml;

    showScreen('result');
}

// ===== 네비게이션 =====
// 매칭된 과학자별로 사용 가능한 "과학자와 함께" 스티커
const SCIENTIST_STICKERS = {
    einstein: 'image/Einstein sticker.png',
    curie: 'image/Curie sticker.png',
    newton: 'image/Newton sticker.png',
    darwin: 'image/Darwin sticker.png',
    tesla: 'image/Tesla sticker.png',
    feynman: 'image/Feynman sticker.png',
    edison: 'image/Edison sticker.png',
    pasteur: 'image/Pasteur sticker.png'
};
const SCIENCE_DAY_STICKER = 'image/sticker.png';

// 한글 마지막 글자에 받침이 있는지 판별 (조사 선택용: 과/와, 이/가 등)
function hasJongseong(str) {
    if (!str) return false;
    const last = str.charCodeAt(str.length - 1);
    // 한글 음절 범위: 0xAC00 ~ 0xD7A3, 받침 있음 = (code - 0xAC00) % 28 !== 0
    if (last < 0xAC00 || last > 0xD7A3) return false;
    return (last - 0xAC00) % 28 !== 0;
}

function goToFrameChoice() {
    // 매칭된 과학자에 해당하는 스티커가 있는지에 따라 UI 갱신
    const scientistBtn = document.getElementById('choiceScientist');
    const scientistImg = document.getElementById('choiceScientistImg');
    const scientistDesc = document.getElementById('choiceScientistDesc');
    const scientistBadge = document.getElementById('choiceScientistBadge');

    const sticker = SCIENTIST_STICKERS[matchedScientist];
    const s = scientists[matchedScientist];

    if (sticker && s) {
        scientistImg.src = sticker;
        const withParticle = hasJongseong(s.name) ? '과' : '와';
        scientistImg.alt = `${s.name}${withParticle} 함께`;
        scientistDesc.textContent = `${s.name}${withParticle} 함께 찰칵`;
        scientistBtn.removeAttribute('aria-disabled');
        scientistBtn.disabled = false;
        scientistBadge.hidden = true;
    } else {
        // 아직 준비되지 않은 과학자 스티커 → 비활성화
        scientistImg.src = s && s.image ? s.image : '';
        scientistImg.alt = '';
        scientistDesc.textContent = '이 과학자 프레임은 준비 중이에요';
        scientistBtn.setAttribute('aria-disabled', 'true');
        scientistBtn.disabled = true;
        scientistBadge.hidden = false;
    }

    showScreen('frameChoice');
}

function chooseFrame(type) {
    let stickerSrc;
    if (type === 'scientist') {
        stickerSrc = SCIENTIST_STICKERS[matchedScientist];
        if (!stickerSrc) {
            // fallback: 준비되지 않은 경우 과학의 날 프레임으로
            stickerSrc = SCIENCE_DAY_STICKER;
            type = 'scienceDay';
        }
    } else {
        stickerSrc = SCIENCE_DAY_STICKER;
    }

    pb.chosenFrameType = type;
    pb.chosenFrameSrc = stickerSrc;

    showScreen('photobooth');
    initPhotoBooth();
}

function goToPhotoBooth() {
    // 하위 호환 - 프레임 선택 없이 바로 이동 시 과학의 날 프레임 기본
    pb.chosenFrameType = 'scienceDay';
    pb.chosenFrameSrc = SCIENCE_DAY_STICKER;
    showScreen('photobooth');
    initPhotoBooth();
}

function goToIntro() {
    showScreen('intro');
}

function retryQuiz() {
    currentQuestion = 0;
    resetScores();
    showScreen('quiz');
    renderQuestion();
}

// =============================================================
// ===== 포토부스 =====
// =============================================================

const pb = {
    stream: null,
    chosenFrameType: 'scienceDay',           // 'scientist' | 'scienceDay'
    chosenFrameSrc: 'image/sticker.png',     // 선택된 스티커 이미지 경로
    stickerImg: null,                        // 선택된 스티커 원본
    stickerKeyedCanvas: null,                // 그린스크린 처리된 스티커
    stickerSlots: null,                      // 자동 감지된 4개 슬롯 좌표
    stickerCacheSrc: null,                   // 캐시된 스티커의 src (갱신 판단용)
    photos: [],                              // 촬영한 4장 (dataURL)
    photoImgs: [],                           // 촬영한 사진을 HTMLImageElement 로 캐시
    isShooting: false,
    video: null,
    frameCanvas: null,
    renderRafId: null                        // 렌더 루프 RAF id
};

const PHOTO_COUNT = 4;

// --- 브라우저 감지 ---
function detectIOSNonSafariBrowser() {
    const ua = navigator.userAgent;
    // iPadOS 13+는 UA에서 iPad를 숨기고 Mac처럼 보내기 때문에 touch 포인트로도 판별
    const isiOS = /iPhone|iPad|iPod/.test(ua) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (!isiOS) return null;
    // iOS Chrome: CriOS, iOS Firefox: FxiOS, iOS Edge: EdgiOS
    if (/CriOS/.test(ua)) return 'Chrome';
    if (/FxiOS/.test(ua)) return 'Firefox';
    if (/EdgiOS/.test(ua)) return 'Edge';
    return null;
}

// --- 디버그 로그 (아이패드 원격 진단용) ---
function dbg(label, value) {
    const el = document.getElementById('pbDebugLog');
    if (!el) return;
    const line = `[${new Date().toISOString().slice(11, 19)}] ${label}: ${typeof value === 'object' ? JSON.stringify(value) : value}`;
    el.textContent = (el.textContent + '\n' + line).trim();
}

function enableDebugIfRequested() {
    const qs = new URLSearchParams(location.search);
    if (qs.has('debug')) {
        const panel = document.getElementById('pbDebug');
        if (panel) panel.hidden = false;
    }
}

// --- 초기화 ---
async function initPhotoBooth() {
    pb.video = document.getElementById('cameraVideo');
    pb.frameCanvas = document.getElementById('frameCanvas');

    resetPhotoBooth();
    hidePbError();
    enableDebugIfRequested();

    dbg('UA', navigator.userAgent);
    dbg('secureCtx', window.isSecureContext);
    dbg('hasMedia', !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia));
    dbg('platform', navigator.platform);
    dbg('maxTouch', navigator.maxTouchPoints);
    dbg('frameType', pb.chosenFrameType);
    dbg('frameSrc', pb.chosenFrameSrc);

    // 사전 점검: iOS 비-Safari 브라우저
    const iosBrowser = detectIOSNonSafariBrowser();
    if (iosBrowser) {
        showPbError({ name: 'IOSNonSafariError', browser: iosBrowser });
        return;
    }

    // 사전 점검: API 존재 여부, 보안 컨텍스트
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showPbError({ name: 'NotSupportedError' });
        return;
    }
    if (!window.isSecureContext) {
        showPbError({ name: 'InsecureContextError' });
        return;
    }

    try {
        // 1. 웹캠 먼저 시작 — iOS Safari는 사용자 제스처 바로 뒤에 getUserMedia 호출해야 함
        if (!pb.stream) {
            dbg('getUserMedia', 'calling...');
            pb.stream = await requestCamera();
            dbg('stream', 'got stream: ' + pb.stream.getVideoTracks().length + ' tracks');
        }
        pb.video.srcObject = pb.stream;
        dbg('srcObject', 'set');

        // iOS Safari 오토플레이 감지
        await startVideoPlayback();

        // 2. 선택된 스티커 로드 + 슬롯 감지 + 그린스크린 처리
        await ensureStickerLoaded(pb.chosenFrameSrc);

        // 3. 렌더 루프 시작 (단일 canvas 에 카메라 + 촬영된 사진 + 스티커 합성)
        startRenderLoop();

    } catch (err) {
        console.error('[photobooth] camera error:', err);
        dbg('ERROR', (err && err.name) + ': ' + (err && err.message));
        showPbError(err);
    }
}

// 스티커 이미지를 로드하고 슬롯 감지 + 크로마키 처리 (같은 src 는 캐시)
async function ensureStickerLoaded(src) {
    if (pb.stickerCacheSrc === src && pb.stickerImg && pb.stickerSlots) return;

    pb.stickerImg = await loadImage(src);
    pb.stickerSlots = detectGreenSlots(pb.stickerImg);
    pb.stickerKeyedCanvas = chromaKeyGreen(pb.stickerImg);
    pb.stickerCacheSrc = src;

    dbg('sticker', `${pb.stickerImg.naturalWidth}x${pb.stickerImg.naturalHeight}, slots=${pb.stickerSlots.length}`);
    pb.stickerSlots.forEach((s, i) => dbg(`slot${i}`, `${s.x},${s.y} ${s.w}x${s.h}`));

    // 캔버스 크기를 스티커 원본 크기로 맞춤 (CSS 로 contain 스케일)
    if (pb.frameCanvas) {
        pb.frameCanvas.width = pb.stickerImg.naturalWidth;
        pb.frameCanvas.height = pb.stickerImg.naturalHeight;
    }
}

// 비디오 재생을 시작하고, 막힐 경우 "탭해서 시작" 게이트를 노출
async function startVideoPlayback() {
    hidePlayGate();
    try {
        await pb.video.play();
        dbg('play()', 'success');
    } catch (err) {
        console.warn('[photobooth] autoplay blocked:', err && err.name);
        dbg('play()', 'blocked: ' + (err && err.name));
        showPlayGate();
        return;
    }
    // play()는 성공했지만 실제로 프레임이 올라오는지 2초 감시 (iOS가 가끔 조용히 멈춤)
    setTimeout(() => {
        const rs = pb.video ? pb.video.readyState : -1;
        const vw = pb.video ? pb.video.videoWidth : 0;
        const vh = pb.video ? pb.video.videoHeight : 0;
        dbg('video@2s', `readyState=${rs} size=${vw}x${vh}`);
        if (pb.video && pb.video.readyState < 2) {
            showPlayGate();
        }
    }, 2000);
}

function showPlayGate() {
    const gate = document.getElementById('pbPlayGate');
    if (!gate) return;
    gate.hidden = false;
    gate.onclick = async () => {
        try {
            await pb.video.play();
            hidePlayGate();
        } catch (err) {
            console.error('[photobooth] manual play failed:', err);
        }
    };
}

function hidePlayGate() {
    const gate = document.getElementById('pbPlayGate');
    if (!gate) return;
    gate.hidden = true;
    gate.onclick = null;
}

// 여러 제약 조건을 순차적으로 시도해서 가장 호환되는 카메라 스트림을 획득
async function requestCamera() {
    const attempts = [
        // 1순위: HD 해상도 + 전면 카메라 선호
        { video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: { ideal: 'user' } }, audio: false },
        // 2순위: 해상도만
        { video: { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false },
        // 3순위: 가장 단순한 제약 (무조건 카메라 하나)
        { video: true, audio: false }
    ];

    let lastErr;
    for (const constraints of attempts) {
        try {
            return await navigator.mediaDevices.getUserMedia(constraints);
        } catch (err) {
            lastErr = err;
            // 권한 거부는 재시도해도 소용없으니 즉시 throw
            if (err.name === 'NotAllowedError' || err.name === 'SecurityError') throw err;
        }
    }
    throw lastErr;
}

function resetPhotoBooth() {
    pb.photos = [];
    pb.photoImgs = [];
    pb.isShooting = false;
    updatePhotoCount();
    updateHint('버튼을 누르면 3초 후 촬영됩니다');
}

function updatePhotoCount() {
    document.getElementById('pbPhotoCount').textContent = pb.photos.length;
}

function updateHint(msg) {
    document.getElementById('pbHint').textContent = msg;
}

function showPbError(err) {
    const box = document.getElementById('pbError');
    const title = box.querySelector('h3');
    const msg = document.getElementById('pbErrorMsg');
    const name = err && err.name;
    let heading = '카메라를 사용할 수 없어요';
    let text;

    switch (name) {
        case 'IOSNonSafariError':
            heading = 'Safari로 열어주세요';
            text = `아이패드/아이폰에서는 ${err.browser} 가 카메라 접근을 지원하지 않아요. 같은 주소를 Safari 로 열면 정상 작동합니다. (Apple 정책으로 iOS의 모든 브라우저는 Safari 엔진을 쓰지만, 카메라 API는 Safari 에서만 허용돼요)`;
            break;
        case 'NotAllowedError':
        case 'SecurityError':
            text = '카메라 권한이 거부됐어요. 주소창 왼쪽 자물쇠/카메라 아이콘을 눌러 "허용"으로 바꾼 뒤 새로고침해 주세요.';
            break;
        case 'NotFoundError':
        case 'OverconstrainedError':
            text = '연결된 카메라를 찾을 수 없어요. 카메라가 켜져 있는지, 다른 앱(Zoom·Teams 등)이 카메라를 사용 중이지 않은지 확인해 주세요.';
            break;
        case 'NotReadableError':
            text = '카메라가 다른 프로그램에서 사용 중이에요. Zoom, Teams, OBS 같은 앱을 종료한 뒤 다시 시도해 주세요.';
            break;
        case 'InsecureContextError':
            text = '카메라는 HTTPS 또는 localhost 에서만 작동해요. 주소창이 https:// 로 시작하는지 확인해 주세요.';
            break;
        case 'NotSupportedError':
            text = '이 브라우저는 카메라 API를 지원하지 않아요. 최신 Safari / Chrome / Edge / Firefox 를 사용해 주세요.';
            break;
        default:
            text = `카메라를 시작하지 못했어요 (${name || '알 수 없는 오류'}). 다시 시도해 주세요.`;
    }
    if (title) title.textContent = heading;
    msg.textContent = text;
    box.hidden = false;
}

function hidePbError() {
    document.getElementById('pbError').hidden = true;
}

// --- 이미지 유틸 ---
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

// 초록 픽셀 판별 (#00FF00 ~ 약간 어두운 초록까지 포괄)
function isGreenPixel(r, g, b) {
    return g > 130 && g - r > 60 && g - b > 60;
}

// 초록 픽셀을 투명하게 치환 (그린스크린)
function chromaKeyGreen(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        if (isGreenPixel(data[i], data[i + 1], data[i + 2])) {
            data[i + 3] = 0;
        }
    }
    ctx.putImageData(imageData, 0, 0);
    return canvas;
}

// sticker.png 안의 초록 사각형 슬롯들을 자동 감지 (위→아래 순서)
function detectGreenSlots(img) {
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, w, h).data;

    // 1) 각 행의 초록 픽셀 개수 → Y축 밴드 검출
    const rowGreen = new Uint32Array(h);
    for (let y = 0; y < h; y++) {
        let count = 0;
        const rowStart = y * w * 4;
        for (let x = 0; x < w; x++) {
            const i = rowStart + x * 4;
            if (isGreenPixel(data[i], data[i + 1], data[i + 2])) count++;
        }
        rowGreen[y] = count;
    }

    // 2) 행 임계치 이상 연속된 구간 = 슬롯 후보 밴드
    const minRowGreen = w * 0.20; // 폭의 20% 이상 초록이면 슬롯 행
    const minBandHeight = h * 0.05; // 슬롯 최소 높이 (전체 5%)
    const bands = [];
    let bandStart = -1;
    for (let y = 0; y < h; y++) {
        if (rowGreen[y] >= minRowGreen) {
            if (bandStart === -1) bandStart = y;
        } else if (bandStart !== -1) {
            if (y - bandStart >= minBandHeight) bands.push({ y0: bandStart, y1: y - 1 });
            bandStart = -1;
        }
    }
    if (bandStart !== -1 && h - bandStart >= minBandHeight) {
        bands.push({ y0: bandStart, y1: h - 1 });
    }

    // 3) 각 밴드의 좌우 경계 = 그 밴드 안의 초록 픽셀 X 최솟값/최댓값
    return bands.map(band => {
        let minX = w, maxX = 0;
        for (let y = band.y0; y <= band.y1; y++) {
            const rowStart = y * w * 4;
            for (let x = 0; x < w; x++) {
                const i = rowStart + x * 4;
                if (isGreenPixel(data[i], data[i + 1], data[i + 2])) {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                }
            }
        }
        return {
            x: minX,
            y: band.y0,
            w: maxX - minX + 1,
            h: band.y1 - band.y0 + 1
        };
    });
}

// 흰 배경 제거 + 인물 bounding box 크롭 (캐시됨)
const _portraitCache = {};
async function preparePortrait(src) {
    if (_portraitCache[src]) return _portraitCache[src];

    const img = await loadImage(src);
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;

    // 1) 흰 배경 제거 + bounding box 계산
    const bgThreshold = 240; // R,G,B 모두 240 이상이면 흰 배경으로 간주
    let minX = w, minY = h, maxX = 0, maxY = 0;
    let hasContent = false;

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const i = (y * w + x) * 4;
            const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
            const isBg = a === 0 || (r >= bgThreshold && g >= bgThreshold && b >= bgThreshold);
            if (isBg) {
                data[i + 3] = 0; // 흰 배경 → 투명
            } else {
                hasContent = true;
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);

    if (!hasContent) {
        _portraitCache[src] = src; // 컨텐츠 없으면 원본 그대로
        return src;
    }

    // 2) bounding box로 크롭
    const cw = maxX - minX + 1;
    const ch = maxY - minY + 1;
    const cropped = document.createElement('canvas');
    cropped.width = cw;
    cropped.height = ch;
    cropped.getContext('2d').drawImage(c, minX, minY, cw, ch, 0, 0, cw, ch);

    const url = cropped.toDataURL('image/png');
    _portraitCache[src] = url;
    return url;
}

// 슬롯에 이미지를 cover-fit (가운데 크롭, 잘리는 부분은 슬롯 밖으로 나가지 않게 clip)
function drawImageCover(ctx, img, dx, dy, dw, dh) {
    const iw = img.width;
    const ih = img.height;
    const scale = Math.max(dw / iw, dh / ih);
    const drawW = iw * scale;
    const drawH = ih * scale;
    const offX = dx + (dw - drawW) / 2;
    const offY = dy + (dh - drawH) / 2;
    ctx.save();
    ctx.beginPath();
    ctx.rect(dx, dy, dw, dh);
    ctx.clip();
    ctx.drawImage(img, offX, offY, drawW, drawH);
    ctx.restore();
}

// 비디오를 슬롯에 cover-fit 으로 그리기 (좌우반전 포함)
function drawVideoMirroredCover(ctx, video, dx, dy, dw, dh) {
    const iw = video.videoWidth;
    const ih = video.videoHeight;
    if (!iw || !ih) return;
    const scale = Math.max(dw / iw, dh / ih);
    const drawW = iw * scale;
    const drawH = ih * scale;
    ctx.save();
    ctx.beginPath();
    ctx.rect(dx, dy, dw, dh);
    ctx.clip();
    // 미러링: 슬롯 영역 내에서 좌우반전
    ctx.translate(dx + dw, dy);
    ctx.scale(-1, 1);
    const offX = (dw - drawW) / 2;
    const offY = (dh - drawH) / 2;
    ctx.drawImage(video, offX, offY, drawW, drawH);
    ctx.restore();
}

// 렌더 루프: 현재 촬영 중인 슬롯을 "전체화면"으로 보여줌
// (라이브 카메라 cover-fit + 해당 슬롯 영역의 스티커 오버레이를 확대)
function startRenderLoop() {
    stopRenderLoop();
    const ctx = pb.frameCanvas.getContext('2d');

    function frame() {
        if (!pb.stickerKeyedCanvas || !pb.stickerSlots) {
            pb.renderRafId = requestAnimationFrame(frame);
            return;
        }
        const slots = pb.stickerSlots;
        // 촬영이 끝나면 마지막 슬롯 유지
        const idx = Math.min(pb.photos.length, slots.length - 1);
        const slot = slots[idx];

        // 캔버스가 현재 슬롯의 비율/크기와 다르면 맞춤
        if (pb.frameCanvas.width !== slot.w || pb.frameCanvas.height !== slot.h) {
            pb.frameCanvas.width = slot.w;
            pb.frameCanvas.height = slot.h;
        }

        // 배경 (그린스크린 처리된 투명 픽셀 뒤)
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, slot.w, slot.h);

        // 라이브 카메라를 슬롯 크기에 cover-fit 으로 꽉 채움
        if (pb.video && pb.video.readyState >= 2) {
            drawVideoMirroredCover(ctx, pb.video, 0, 0, slot.w, slot.h);
        }

        // 해당 슬롯 영역만큼의 스티커 오버레이를 잘라서 동일한 위치에 그림
        ctx.drawImage(
            pb.stickerKeyedCanvas,
            slot.x, slot.y, slot.w, slot.h,  // source rect
            0, 0, slot.w, slot.h              // dest rect
        );

        pb.renderRafId = requestAnimationFrame(frame);
    }
    pb.renderRafId = requestAnimationFrame(frame);
}

function stopRenderLoop() {
    if (pb.renderRafId) {
        cancelAnimationFrame(pb.renderRafId);
        pb.renderRafId = null;
    }
}


// --- 셔터 ---
async function takePhoto() {
    if (pb.isShooting) return;
    if (pb.photos.length >= PHOTO_COUNT) return;
    pb.isShooting = true;

    const shutter = document.getElementById('pbShutter');
    shutter.disabled = true;

    // 카운트다운
    for (let n = 3; n >= 1; n--) {
        showCountdown(n);
        await sleep(1000);
    }
    hideCountdown();

    // 플래시 + 캡처
    flash();
    const photoUrl = captureFrame();
    const photoImg = await loadImage(photoUrl);
    pb.photos.push(photoUrl);
    pb.photoImgs.push(photoImg);
    updatePhotoCount();
    updateSlotIndicator();

    await sleep(600);

    pb.isShooting = false;
    shutter.disabled = false;

    if (pb.photos.length >= PHOTO_COUNT) {
        updateHint('완성!');
        await sleep(500);
        buildSticker();
        showScreen('sticker');
    } else {
        const remaining = PHOTO_COUNT - pb.photos.length;
        updateHint(`좋아요! ${remaining}장 남았어요`);
    }
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function showCountdown(n) {
    const el = document.getElementById('pbCountdown');
    el.textContent = n;
    el.classList.remove('active');
    // reflow for restart animation
    void el.offsetWidth;
    el.classList.add('active');
}

function hideCountdown() {
    document.getElementById('pbCountdown').classList.remove('active');
}

function flash() {
    const el = document.getElementById('pbFlash');
    el.classList.remove('active');
    void el.offsetWidth;
    el.classList.add('active');
}

// 현재 카메라 프레임을 캡처 (좌우반전, 프레임 오버레이 없이 raw 저장)
// 최종 스티커에서 사각형 슬롯에 깔끔하게 배치되려면 raw 영상이 필요함
function captureFrame() {
    const vw = pb.video.videoWidth;
    const vh = pb.video.videoHeight;
    const canvas = document.createElement('canvas');
    canvas.width = vw;
    canvas.height = vh;
    const ctx = canvas.getContext('2d');

    // 좌우반전해서 그리기 (사용자가 본 것과 동일하게)
    ctx.save();
    ctx.translate(vw, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(pb.video, 0, 0, vw, vh);
    ctx.restore();

    return canvas.toDataURL('image/png');
}

// --- 스티커 생성 (선택된 스티커 프레임의 4개 초록 슬롯에 사진 배치) ---
async function buildSticker() {
    // 렌더 루프에서 이미 스티커가 로드되어 있지만, 안전하게 한 번 더 보장
    await ensureStickerLoaded(pb.chosenFrameSrc);

    const stickerW = pb.stickerImg.naturalWidth;
    const stickerH = pb.stickerImg.naturalHeight;
    const slots = pb.stickerSlots;

    const canvas = document.getElementById('stickerCanvas');
    canvas.width = stickerW;
    canvas.height = stickerH;
    const ctx = canvas.getContext('2d');

    // 배경
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, stickerW, stickerH);

    // 촬영된 이미지 사용 (이미 preload 됨)
    const images = pb.photoImgs.length === pb.photos.length
        ? pb.photoImgs
        : await Promise.all(pb.photos.map(loadImage));

    // 각 슬롯에 사진 cover-fit 배치 (1번 슬롯 → 1번 사진 …)
    images.forEach((img, i) => {
        const slot = slots[i];
        if (!slot) return;
        drawImageCover(ctx, img, slot.x, slot.y, slot.w, slot.h);
    });

    // 그린 키된 스티커 오버레이 (장식이 사진 위에 덮임)
    ctx.drawImage(pb.stickerKeyedCanvas, 0, 0);
}

// --- 다운로드 / 공유 / 재촬영 ---
function downloadSticker() {
    const canvas = document.getElementById('stickerCanvas');
    const link = document.createElement('a');
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    link.download = `science-photobooth-${stamp}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Web Share API (파일) → 모바일에서 카카오톡이 공유 대상으로 뜸
async function shareToKakao() {
    const canvas = document.getElementById('stickerCanvas');
    const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
    if (!blob) {
        alert('스티커를 준비하는 중 오류가 발생했어요. 다시 시도해 주세요.');
        return;
    }
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const file = new File([blob], `science-photobooth-${stamp}.png`, { type: 'image/png' });

    // files 공유가 지원되면 시스템 공유 시트를 띄워 카카오톡으로 보내기
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
            await navigator.share({
                files: [file],
                title: '과학의 날 포토부스',
                text: '나의 과학자 포토부스 결과를 공유해요!'
            });
            return;
        } catch (err) {
            if (err && err.name === 'AbortError') return;
            console.error('[share] failed:', err);
        }
    }

    // 폴백: 이미지 다운로드 후 카톡 웹(데스크톱)으로 이동
    const confirmFallback = confirm(
        '이 기기/브라우저에서는 바로 카톡 공유가 어려워요.\n\n' +
        '사진을 저장한 뒤 카카오톡에 직접 보낼 수 있도록\n' +
        '① 이미지를 저장하고\n' +
        '② 카카오톡 웹을 열까요?'
    );
    if (!confirmFallback) return;

    // ① 저장
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = file.name;
    link.href = url;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    // ② 카카오톡 웹 (새 창)
    window.open('https://accounts.kakao.com/login/?continue=https%3A%2F%2Fweb.kakao.com%2Fchats', '_blank', 'noopener');
}

function retakePhotos() {
    showScreen('photobooth');
    resetPhotoBooth();
    hidePbError();
    // 카메라/프레임은 유지, 렌더 루프는 계속 돌고 있음
    startRenderLoop();
    updateSlotIndicator();
}

function exitPhotoBooth() {
    stopRenderLoop();
    stopCamera();
    showScreen('intro');
}

function exitToIntro() {
    stopRenderLoop();
    stopCamera();
    showScreen('intro');
}

function stopCamera() {
    if (pb.stream) {
        pb.stream.getTracks().forEach(t => t.stop());
        pb.stream = null;
    }
    if (pb.video) pb.video.srcObject = null;
}

// ===== 시작 =====
document.addEventListener('DOMContentLoaded', init);
