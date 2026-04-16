# 과학의 날 포토부스

과학자 매칭 퀴즈와 그린스크린 포토부스를 결합한 웹앱. 5가지 질문으로 나와 결이 맞는 과학자를 찾고, 웹캠으로 4장 촬영 후 세로 스티커 사진을 만든다.

## 기능

- **과학자 매칭 퀴즈** — 5문항 점수제 매칭으로 8명의 과학자(아인슈타인, 퀴리, 뉴턴, 다윈, 테슬라, 파인만, 에디슨, 파스퇴르) 중 한 명과 매칭
- **포토부스** — 웹캠 + `photo.png` 프레임을 그린스크린(`#00FF00`) 처리해 합성, 3·2·1 카운트다운 후 촬영, 4장 반복
- **세로 스티커 사진** — 촬영한 4장을 세로로 쌓고 헤더/푸터 추가해 PNG로 저장

## 기술

- 순수 HTML / CSS / JavaScript (빌드 도구 없음)
- Pretendard Variable (dynamic-subset CDN)
- Karrot Seed Design System 기반 라이트 테마
- Canvas API 기반 크로마 키 / 이미지 합성
- `getUserMedia`로 웹캠 접근

## 실행

```bash
npx serve -l 3000 .
```

또는 임의의 정적 서버로 `index.html` 제공. 웹캠 기능은 `https://` 또는 `localhost`에서만 동작.

## 폴더 구조

```
.
├── index.html
├── css/style.css
├── js/script.js
├── image/
│   ├── home.png     # 인트로 배경
│   ├── start.png    # 시작 버튼
│   └── photo.png    # 포토부스 프레임 (하트 영역이 #00FF00)
└── DESIGN.md        # 디자인 시스템 문서
```
