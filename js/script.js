// ===== 과학자 데이터 =====
const scientists = {
    einstein: {
        name: "알베르트 아인슈타인",
        nameEn: "Albert Einstein (1879-1955)",
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
        text: "어려운 문제를 만났을 때 나는?",
        options: [
            {
                label: "A",
                text: "포기하지 않고 끝까지 파고든다",
                scores: { curie: 3, newton: 2 }
            },
            {
                label: "B",
                text: "완전히 다른 방향에서 생각해본다",
                scores: { einstein: 3, tesla: 2 }
            },
            {
                label: "C",
                text: "관련 자료를 모으고 꼼꼼히 분석한다",
                scores: { darwin: 3, pasteur: 2, newton: 1 }
            },
            {
                label: "D",
                text: "친구나 선생님과 같이 의논하며 풀어본다",
                scores: { feynman: 3, edison: 2 }
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
function calculateResult() {
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
function goToPhotoBooth() {
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
    frameImg: null,           // 원본 photo.png (촬영 중 라이브 프레임)
    frameKeyedCanvas: null,   // 그린스크린 처리된 라이브 프레임
    stickerImg: null,         // 원본 sticker.png (최종 4컷 프레임)
    stickerKeyedCanvas: null, // 그린스크린 처리된 스티커 프레임
    stickerSlots: null,       // 자동 감지된 4개 슬롯 좌표
    photos: [],               // 촬영한 4장 (dataURL)
    isShooting: false,
    video: null,
    frameCanvas: null
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

        // iOS Safari 오토플레이 감지 — play()가 거부되거나 영상이 안 뜨면 탭 유도
        await startVideoPlayback();

        // 2. 그 다음 프레임 이미지 로드 + 그린스크린 처리
        if (!pb.frameImg) {
            pb.frameImg = await loadImage('image/photo.png');
            pb.frameKeyedCanvas = chromaKeyGreen(pb.frameImg);
            dbg('frame', pb.frameKeyedCanvas.width + 'x' + pb.frameKeyedCanvas.height);
        }
        renderFrameOverlay();

    } catch (err) {
        console.error('[photobooth] camera error:', err);
        dbg('ERROR', (err && err.name) + ': ' + (err && err.message));
        showPbError(err);
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

function renderFrameOverlay() {
    const target = pb.frameCanvas;
    target.width = pb.frameKeyedCanvas.width;
    target.height = pb.frameKeyedCanvas.height;
    target.getContext('2d').drawImage(pb.frameKeyedCanvas, 0, 0);
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
    pb.photos.push(photoUrl);
    updatePhotoCount();

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

// --- 스티커 생성 (sticker.png 프레임의 4개 초록 슬롯에 사진 배치) ---
async function buildSticker() {
    // sticker.png 로드 + 슬롯 좌표 + 크로마키 캐시
    if (!pb.stickerImg) {
        pb.stickerImg = await loadImage('image/sticker.png');
        pb.stickerSlots = detectGreenSlots(pb.stickerImg);
        pb.stickerKeyedCanvas = chromaKeyGreen(pb.stickerImg);
        dbg('sticker', `${pb.stickerImg.naturalWidth}x${pb.stickerImg.naturalHeight}, slots=${pb.stickerSlots.length}`);
        pb.stickerSlots.forEach((s, i) => dbg(`slot${i}`, `${s.x},${s.y} ${s.w}x${s.h}`));
    }

    const stickerW = pb.stickerImg.naturalWidth;
    const stickerH = pb.stickerImg.naturalHeight;
    const slots = pb.stickerSlots;

    const canvas = document.getElementById('stickerCanvas');
    canvas.width = stickerW;
    canvas.height = stickerH;
    const ctx = canvas.getContext('2d');

    // 배경 (혹시 PNG가 투명한 부분이 있을 경우 대비)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, stickerW, stickerH);

    // 1) 사진 4장 로드
    const images = await Promise.all(pb.photos.map(loadImage));

    // 2) 각 슬롯에 사진 cover-fit 배치 (1번 슬롯 → 1번 사진 …)
    images.forEach((img, i) => {
        const slot = slots[i];
        if (!slot) return; // 슬롯 부족 시 스킵
        drawImageCover(ctx, img, slot.x, slot.y, slot.w, slot.h);
    });

    // 3) 그린 키된 sticker.png 오버레이 (장식이 사진 위에 덮임)
    ctx.drawImage(pb.stickerKeyedCanvas, 0, 0);
}

// --- 다운로드 / 재촬영 ---
function downloadSticker() {
    const canvas = document.getElementById('stickerCanvas');
    const link = document.createElement('a');
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    link.download = `science-photobooth-${stamp}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function retakePhotos() {
    showScreen('photobooth');
    resetPhotoBooth();
    hidePbError();
    // 카메라/프레임은 유지
}

function exitPhotoBooth() {
    stopCamera();
    showScreen('intro');
}

function exitToIntro() {
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
