/* The Hormone Blueprint — "Is HRT Right for You? A Conversation Guide"
   A flagship educational tool that prepares a woman for a conversation with her
   doctor about HRT. It never diagnoses and never tells anyone to start or stop
   treatment. Clinical basis: NICE NG23 (Menopause, updated 2024) + British
   Menopause Society. Reuses the hb-menopause flagship CSS system (Fraunces +
   Mulish, plum/gold/rose on cream) so it reads as one family with the other tools.
   Mounts into #hbhrt-tool. Serves the PDF lead magnet on email submit. */
(function () {
  'use strict';

  var m = document.getElementById('hbhrt-tool');
  if (!m) return;

  // ---- inject fonts + styles once ----
  if (!document.getElementById('hbhrt-fonts')) {
    var f = document.createElement('link'); f.id='hbhrt-fonts'; f.rel='stylesheet';
    f.href='https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..500&family=Mulish:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap';
    document.head.appendChild(f);
  }
  if (!document.getElementById('hbhrt-style')) {
    var st = document.createElement('style'); st.id='hbhrt-style';
    st.textContent = `#hbhrt-tool{ --ink:#33172E; --ink-80:#432340; --ink-70:rgba(51,23,46,.76); --ink-45:rgba(51,23,46,.64); --ink-12:rgba(51,23,46,.12); --gold:#C9A84C; --gold-deep:#7d6317; --gold-soft:rgba(201,168,76,.14); --gold-line:rgba(201,168,76,.45); --rose:#C56A5C; --rose-soft:rgba(197,106,92,.1); --rose-deep:#a44a3d; --plum:#5A2E4E; --plum-deep:#3A1B32; --paper:#FAF3EF; --paper-2:#F3E7DF; --card:#fff; --line:rgba(51,23,46,.09); --serif:'Fraunces',Georgia,serif; --sans:'Mulish',system-ui,sans-serif; --mono:'IBM Plex Mono',monospace; --maxw:820px; } #hbhrt-tool *{margin:0;padding:0;box-sizing:border-box} #hbhrt-tool{background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.6;-webkit-font-smoothing:antialiased; background-image:radial-gradient(1200px 500px at 70% -10%, rgba(197,106,92,.06), transparent 60%);} #hbhrt-tool .wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px} #hbhrt-tool a{color:inherit} #hbhrt-tool .topbar{border-bottom:1px solid var(--line)} #hbhrt-tool .topbar .wrap{display:flex;align-items:center;justify-content:space-between;height:62px} #hbhrt-tool .brand{font-family:var(--serif);font-weight:600;font-size:1.08rem;text-decoration:none;letter-spacing:-.01em} #hbhrt-tool .brand b{color:var(--rose)} #hbhrt-tool .topcta{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-deep);text-decoration:none;border:1px solid var(--gold-line);padding:7px 15px;border-radius:22px;transition:background .15s} #hbhrt-tool .topcta:hover{background:var(--gold-soft)} #hbhrt-tool .hero{padding:60px 0 30px;text-align:center} #hbhrt-tool .eyebrow{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:var(--rose-deep)} #hbhrt-tool h1{font-family:var(--serif);font-weight:400;font-size:clamp(2.3rem,5.6vw,3.5rem);line-height:1.06;letter-spacing:-.022em;margin-top:18px} #hbhrt-tool h1 em{font-style:italic;color:var(--rose)} #hbhrt-tool .lede{margin:20px auto 0;font-size:1.12rem;color:var(--ink-70);max-width:36em} #hbhrt-tool .byline{margin-top:16px;font-family:var(--mono);font-size:11px;letter-spacing:.03em;color:var(--ink-45)} #hbhrt-tool .byline em{font-style:normal;color:var(--rose-deep)} #hbhrt-tool .journey{margin-top:30px} #hbhrt-tool .jtrack{position:relative;height:14px;border-radius:10px;overflow:hidden; background:linear-gradient(90deg,#EAD9B0 0%,#D9B36A 30%,#CE8A62 62%,#7C4064 100%); box-shadow:inset 0 0 0 1px rgba(51,23,46,.06)} #hbhrt-tool .jticks{position:relative;height:0} #hbhrt-tool .jtick{position:absolute;top:-14px;width:1px;height:14px;background:rgba(255,255,255,.55)} #hbhrt-tool .jlabels{display:flex;margin-top:12px} #hbhrt-tool .jlabels span{flex:1;text-align:center;font-family:var(--mono);font-size:10.5px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink-45);line-height:1.3} #hbhrt-tool .jlabels span b{display:block;color:var(--ink-70);font-weight:600} #hbhrt-tool .jmarker{position:absolute;top:50%;transform:translate(-50%,-50%);transition:left .5s cubic-bezier(.2,.8,.2,1);z-index:2} #hbhrt-tool .jmarker .pin{width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid var(--plum);box-shadow:0 3px 10px rgba(51,23,46,.35)} #hbhrt-tool .jflag{position:absolute;top:-40px;left:50%;transform:translateX(-50%);white-space:nowrap; font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#fff; background:var(--plum-deep);padding:5px 10px;border-radius:7px} #hbhrt-tool .jflag::after{content:"";position:absolute;bottom:-4px;left:50%;transform:translateX(-50%) rotate(45deg);width:8px;height:8px;background:var(--plum-deep)} #hbhrt-tool .assess{margin-top:40px;background:var(--card);border:1px solid var(--line);border-radius:26px; box-shadow:0 30px 70px -40px rgba(51,23,46,.4);overflow:hidden} #hbhrt-tool .aprog{height:4px;background:var(--paper-2)} #hbhrt-tool .aprog i{display:block;height:100%;background:linear-gradient(90deg,var(--gold),var(--rose));transition:width .4s ease;border-radius:0 4px 4px 0} #hbhrt-tool .atop{display:flex;align-items:center;justify-content:space-between;padding:20px 30px 0} #hbhrt-tool .astep{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-deep)} #hbhrt-tool .aname{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-45)} #hbhrt-tool .aview{padding:14px 30px 6px;min-height:290px} #hbhrt-tool .step{display:none;animation:stepin .35s ease} #hbhrt-tool .step.on{display:block} @keyframes stepin{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}} #hbhrt-tool .qlead{font-family:var(--serif);font-weight:500;font-size:1.6rem;letter-spacing:-.015em;line-height:1.15;margin-bottom:6px} #hbhrt-tool .qhelp{font-size:14px;color:var(--ink-70);margin-bottom:20px;max-width:42em} #hbhrt-tool .agebox{text-align:center;padding:20px 0 8px} #hbhrt-tool .agenum{font-family:var(--serif);font-weight:500;font-size:4rem;line-height:1;color:var(--ink);letter-spacing:-.02em} #hbhrt-tool .agenum small{font-family:var(--mono);font-size:.9rem;color:var(--ink-45);letter-spacing:.1em;text-transform:uppercase;display:block;margin-top:6px} #hbhrt-tool .slider{-webkit-appearance:none;appearance:none;width:100%;max-width:480px;height:6px;border-radius:6px;margin:34px auto 6px;display:block; background:linear-gradient(90deg,var(--rose) 0%,var(--gold) 100%);outline:none;cursor:pointer} #hbhrt-tool .slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:30px;height:30px;border-radius:50%;background:#fff;border:3px solid var(--rose);box-shadow:0 3px 10px rgba(51,23,46,.3);cursor:pointer;transition:transform .1s} #hbhrt-tool .slider::-webkit-slider-thumb:active{transform:scale(1.12)} #hbhrt-tool .slider::-moz-range-thumb{width:30px;height:30px;border-radius:50%;background:#fff;border:3px solid var(--rose);box-shadow:0 3px 10px rgba(51,23,46,.3);cursor:pointer} #hbhrt-tool .sends{display:flex;justify-content:space-between;max-width:480px;margin:0 auto;font-family:var(--mono);font-size:11px;color:var(--ink-45)} #hbhrt-tool .opts{display:flex;flex-direction:column;gap:10px} #hbhrt-tool .opt{display:flex;align-items:center;gap:14px;border:1.5px solid var(--ink-12);border-radius:14px;padding:16px 18px;cursor:pointer;transition:all .15s;background:var(--card)} #hbhrt-tool .opt:hover{border-color:var(--gold-line);background:var(--gold-soft);transform:translateX(2px)} #hbhrt-tool .opt input{position:absolute;opacity:0;pointer-events:none} #hbhrt-tool .opt .dot{flex:0 0 auto;width:20px;height:20px;border-radius:50%;border:2px solid var(--ink-12);transition:all .15s} #hbhrt-tool .opt .ot{font-size:15px;font-weight:700;color:var(--ink)} #hbhrt-tool .opt .os{font-size:12.5px;color:var(--ink-45);display:block;font-weight:400;margin-top:1px} #hbhrt-tool .opt.sel{border-color:var(--rose);background:var(--rose-soft)} #hbhrt-tool .opt.sel .dot{border-color:var(--rose);background:var(--rose);box-shadow:inset 0 0 0 4px #fff} #hbhrt-tool .symhead{display:grid;grid-template-columns:1fr repeat(4,48px);gap:5px;align-items:end;margin-bottom:4px;position:sticky;top:0} #hbhrt-tool .symhead .sh{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.04em;color:var(--ink-70);text-align:center;text-transform:uppercase} #hbhrt-tool .symrow{display:grid;grid-template-columns:1fr repeat(4,48px);gap:5px;align-items:center;padding:9px 0;border-top:1px solid var(--paper-2)} #hbhrt-tool .symrow .sl{font-size:14px;font-weight:700;color:var(--ink)} #hbhrt-tool .sbtn{height:32px;border-radius:9px;border:1.5px solid var(--ink-12);background:var(--card);cursor:pointer;transition:all .12s;position:relative} #hbhrt-tool .sbtn:hover{border-color:var(--gold-line)} #hbhrt-tool .sbtn.on{border-color:var(--rose);background:var(--rose)} #hbhrt-tool .sbtn.on::after{content:"";position:absolute;inset:0;margin:auto;width:8px;height:8px;border-radius:50%;background:#fff} #hbhrt-tool .anav{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 30px 26px} #hbhrt-tool .back{background:none;border:0;font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-45);cursor:pointer;padding:8px 4px} #hbhrt-tool .back:hover{color:var(--ink)} #hbhrt-tool .back[hidden]{visibility:hidden} #hbhrt-tool .next{font-family:var(--sans);font-weight:800;font-size:15px;color:#2a1c02;background:var(--gold);border:0;padding:14px 30px;border-radius:12px;cursor:pointer;transition:transform .15s,filter .15s} #hbhrt-tool .next:hover{transform:translateY(-1px);filter:brightness(1.04)} #hbhrt-tool .privline{text-align:center;font-size:11px;color:var(--ink-45);padding:0 30px 22px;margin-top:-8px} #hbhrt-tool .result{margin-top:40px;display:none} #hbhrt-tool .result.show{display:block;animation:stepin .45s ease} #hbhrt-tool .rcard{background:var(--card);border:1px solid var(--line);border-radius:26px;overflow:hidden;box-shadow:0 30px 70px -40px rgba(51,23,46,.45)} #hbhrt-tool .rhead{padding:34px 34px 30px;background:linear-gradient(155deg,var(--plum),var(--plum-deep));color:#fff;position:relative} #hbhrt-tool .rk{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)} #hbhrt-tool .rstage{font-family:var(--serif);font-weight:500;font-size:2.2rem;margin-top:10px;letter-spacing:-.015em;line-height:1.08} #hbhrt-tool .rsub{font-size:14.5px;color:rgba(255,255,255,.82);margin-top:10px;max-width:46em} #hbhrt-tool .rhead .journey{margin-top:28px} #hbhrt-tool .rhead .jlabels span{color:rgba(255,255,255,.45)} #hbhrt-tool .rhead .jlabels span b{color:rgba(255,255,255,.8)} #hbhrt-tool .rhead .jtick{background:rgba(255,255,255,.4)} #hbhrt-tool .rbody{padding:30px 34px} #hbhrt-tool .rsec{margin-bottom:26px} #hbhrt-tool .rsec:last-child{margin-bottom:0} #hbhrt-tool .rsec h4{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:12px} #hbhrt-tool .rsec p{font-size:15px;color:var(--ink-70)} #hbhrt-tool .rsec b{color:var(--ink)} #hbhrt-tool .flag{border:1px solid var(--rose);background:var(--rose-soft);border-radius:14px;padding:16px 18px;margin-bottom:14px;display:flex;gap:12px} #hbhrt-tool .flag .fi{flex:0 0 auto;width:24px;height:24px;border-radius:50%;background:var(--rose);color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700} #hbhrt-tool .flag .ft{font-weight:700;font-size:14.5px;color:var(--rose-deep)} #hbhrt-tool .flag p{font-size:13.5px;color:var(--ink-70);margin-top:4px} #hbhrt-tool .timing{display:flex;gap:14px;align-items:flex-start;border:1px solid var(--gold-line);background:var(--gold-soft);border-radius:14px;padding:16px 18px;margin-bottom:22px} #hbhrt-tool .timing .ti{flex:0 0 auto;font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold-deep);padding-top:2px} #hbhrt-tool .timing p{font-size:13.5px;color:var(--ink-70);margin:0} #hbhrt-tool .timing b{color:var(--ink)} #hbhrt-tool .doms{display:flex;flex-direction:column;gap:15px} #hbhrt-tool .dom-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px} #hbhrt-tool .dom-name{font-size:13.5px;font-weight:700;color:var(--ink)} #hbhrt-tool .dom-val{font-family:var(--mono);font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-45)} #hbhrt-tool .bar{height:10px;border-radius:6px;background:var(--paper-2);overflow:hidden} #hbhrt-tool .bar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,var(--gold),var(--rose));transition:width .6s ease} #hbhrt-tool .steps-list{list-style:none;display:flex;flex-direction:column;gap:13px} #hbhrt-tool .steps-list li{display:flex;gap:13px;font-size:14.5px;color:var(--ink-70)} #hbhrt-tool .steps-list .sn{flex:0 0 auto;width:24px;height:24px;border-radius:50%;background:var(--gold-soft);color:var(--gold-deep);font-family:var(--mono);font-size:11px;font-weight:600;display:flex;align-items:center;justify-content:center;margin-top:1px} #hbhrt-tool .steps-list b{color:var(--ink)} #hbhrt-tool .steps-list a{color:var(--rose-deep);font-weight:700;text-decoration:underline;text-decoration-color:var(--gold-line);text-underline-offset:2px} #hbhrt-tool .ractions{margin-top:24px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap} #hbhrt-tool .ractions button{background:none;border:1px solid var(--ink-12);border-radius:22px;padding:10px 20px;font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-70);cursor:pointer;transition:all .15s} #hbhrt-tool .ractions button:hover{border-color:var(--rose);color:var(--rose-deep)} #hbhrt-tool .ractions .primary{background:var(--plum);color:#fff;border-color:var(--plum)} #hbhrt-tool .ractions .primary:hover{background:var(--plum-deep);color:#fff} @media print{ #hbhrt-tool{background:#fff} #hbhrt-tool .topbar, #hbhrt-tool .assess, #hbhrt-tool article, #hbhrt-tool .foot, #hbhrt-tool .ractions, #hbhrt-tool .privline{display:none !important} #hbhrt-tool .result{display:block !important;margin:0} #hbhrt-tool .rcard{box-shadow:none;border:1px solid #999} #hbhrt-tool .rhead{background:#3A1B32 !important;-webkit-print-color-adjust:exact;print-color-adjust:exact} } #hbhrt-tool .retake{margin-top:22px;text-align:center} #hbhrt-tool .retake button{background:none;border:1px solid var(--ink-12);border-radius:22px;padding:9px 20px;font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-70);cursor:pointer} #hbhrt-tool .retake button:hover{border-color:var(--rose);color:var(--rose-deep)} #hbhrt-tool .rnote{font-size:11.5px;color:var(--ink-45);line-height:1.6;padding:16px 34px;border-top:1px solid var(--line);background:var(--paper)} #hbhrt-tool article{margin-top:64px} #hbhrt-tool .blk{margin-bottom:56px} #hbhrt-tool .kicker{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--rose-deep);margin-bottom:14px} #hbhrt-tool sup.cit{font-family:var(--mono);font-size:10px;font-weight:600;line-height:0;margin-left:1px} #hbhrt-tool sup.cit a{color:var(--gold-deep);text-decoration:none;border:1px solid var(--gold-line);border-radius:4px;padding:0 3px} #hbhrt-tool h2{font-family:var(--serif);font-weight:500;font-size:clamp(1.7rem,3.6vw,2.1rem);letter-spacing:-.015em;line-height:1.14} #hbhrt-tool article p{margin-top:16px;color:var(--ink-70);font-size:1.04rem} #hbhrt-tool article p strong, #hbhrt-tool article li strong{color:var(--ink);font-weight:700} #hbhrt-tool .stages4{margin-top:26px;display:grid;grid-template-columns:1fr 1fr;gap:14px} #hbhrt-tool .st{border:1px solid var(--line);border-radius:16px;padding:20px 20px;background:var(--card);position:relative;overflow:hidden} #hbhrt-tool .st::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--seg)} #hbhrt-tool .st .stnum{font-family:var(--mono);font-size:11px;color:var(--gold-deep);letter-spacing:.1em} #hbhrt-tool .st h3{font-family:var(--serif);font-size:1.2rem;font-weight:600;color:var(--ink);margin:6px 0 2px} #hbhrt-tool .st .sttag{font-family:var(--mono);font-size:11px;color:var(--ink-45);letter-spacing:.03em;margin-bottom:9px} #hbhrt-tool .st p{margin:0;font-size:13.5px;color:var(--ink-70)} #hbhrt-tool .tbl-wrap{margin-top:22px;border:1px solid var(--line);border-radius:14px; overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;background:var(--card)} #hbhrt-tool table{width:100%;border-collapse:collapse;font-size:14px} #hbhrt-tool thead th{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-45);text-align:left;padding:0 15px 11px;font-weight:500;border-bottom:1px solid var(--ink-12)} #hbhrt-tool tbody td{padding:14px 15px;border-bottom:1px solid var(--line);vertical-align:top} #hbhrt-tool tbody tr:last-child td{border-bottom:0} #hbhrt-tool tbody td:first-child{font-weight:700;white-space:nowrap} #hbhrt-tool td.num{font-family:var(--mono);color:var(--ink-70);white-space:nowrap} #hbhrt-tool .tbl-note{font-size:12px;color:var(--ink-45);margin-top:14px;padding-left:15px;border-left:2px solid var(--rose);line-height:1.6} #hbhrt-tool details{border-top:1px solid var(--line);padding:18px 0} #hbhrt-tool details summary{font-family:var(--serif);font-size:1.15rem;font-weight:500;cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:16px;color:var(--ink)} #hbhrt-tool details summary::-webkit-details-marker{display:none} #hbhrt-tool details summary::after{content:"+";font-family:var(--mono);color:var(--gold-deep);font-size:1.3rem} #hbhrt-tool details[open] summary::after{content:"\\2013"} #hbhrt-tool details p{margin-top:12px;color:var(--ink-70);font-size:1rem} #hbhrt-tool .about{border:1px solid var(--line);border-radius:18px;padding:28px 30px;background:var(--card)} #hbhrt-tool .about .k{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:12px} #hbhrt-tool .about p{font-size:13.5px;color:var(--ink-70);max-width:47em} #hbhrt-tool .about p+p{margin-top:10px} #hbhrt-tool .about b{color:var(--ink)} #hbhrt-tool .sources{margin-top:16px;background:var(--paper-2);border:1px solid var(--line);border-radius:18px;padding:28px 30px} #hbhrt-tool .sources .k{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:14px} #hbhrt-tool .sources ol{margin:0;padding-left:20px;font-size:12.5px;color:var(--ink-70);line-height:1.75} #hbhrt-tool .sources li{margin-bottom:8px} #hbhrt-tool .sources a{color:var(--rose-deep)} #hbhrt-tool .rev{margin-top:14px;font-size:11.5px;color:var(--ink-45);font-family:var(--mono)} #hbhrt-tool .capture{margin-top:56px;border:1px solid var(--gold-line);background:linear-gradient(180deg,#fffdf9,#f6ead6);border-radius:22px;padding:38px 32px;text-align:center} #hbhrt-tool .cap-k{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-deep)} #hbhrt-tool .cap-t{font-family:var(--serif);font-weight:500;font-size:1.65rem;margin-top:8px;letter-spacing:-.01em} #hbhrt-tool .cap-row{display:flex;gap:8px;margin-top:18px;max-width:450px;margin-left:auto;margin-right:auto} #hbhrt-tool .cap-row input{flex:1;font-size:15px;padding:13px 15px;border:1px solid var(--ink-12);border-radius:10px;background:var(--card);outline:none;min-width:0} #hbhrt-tool .cap-row input:focus{border-color:var(--gold);box-shadow:0 0 0 3px var(--gold-soft)} #hbhrt-tool .cap-row button{flex:0 0 auto;font-family:var(--sans);font-weight:800;font-size:14px;color:#2a1c02;background:var(--gold);border:0;padding:0 24px;border-radius:10px;cursor:pointer} #hbhrt-tool .cap-done{margin-top:12px;font-size:13.5px;font-weight:700;color:var(--gold-deep)} #hbhrt-tool .foot{margin-top:60px;border-top:1px solid var(--line);padding:32px 0 54px} #hbhrt-tool .foot .wrap{display:flex;flex-direction:column;gap:6px} #hbhrt-tool .foot .fb{font-family:var(--serif);font-weight:600} #hbhrt-tool .foot .fc{font-size:12px;color:var(--ink-45)} @media(max-width:640px){ #hbhrt-tool .hero{padding:40px 0 20px} #hbhrt-tool .assess, #hbhrt-tool .result{margin-top:30px} #hbhrt-tool .aview{padding-left:22px;padding-right:22px;min-height:0} #hbhrt-tool .atop, #hbhrt-tool .anav{padding-left:22px;padding-right:22px} #hbhrt-tool .rhead, #hbhrt-tool .rbody{padding-left:22px;padding-right:22px} #hbhrt-tool .stages4{grid-template-columns:1fr} #hbhrt-tool .symhead, #hbhrt-tool .symrow{grid-template-columns:1fr repeat(4,38px)} #hbhrt-tool .qlead{font-size:1.35rem} #hbhrt-tool .agenum{font-size:3.2rem} #hbhrt-tool .jlabels span{font-size:9.5px} #hbhrt-tool .tbl-wrap{border:0;background:transparent;overflow-x:visible;margin-top:18px} #hbhrt-tool .tbl-wrap thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap} #hbhrt-tool .tbl-wrap table,#hbhrt-tool .tbl-wrap tbody,#hbhrt-tool .tbl-wrap tr,#hbhrt-tool .tbl-wrap td{display:block;width:auto} #hbhrt-tool .tbl-wrap tr{border:1px solid var(--line);border-radius:14px;background:var(--card); padding:16px 18px;margin-bottom:12px} #hbhrt-tool .tbl-wrap tr:last-child{margin-bottom:0} #hbhrt-tool .tbl-wrap td{border:0;padding:6px 0} #hbhrt-tool .tbl-wrap td:before{content:attr(data-l);display:block;font-size:10px;letter-spacing:.09em; text-transform:uppercase;color:var(--ink-45);margin-bottom:3px;font-family:var(--sans)} #hbhrt-tool .tbl-wrap tbody td:first-child{white-space:normal;font-size:17px;padding-top:0} #hbhrt-tool .tbl-wrap td.num{white-space:normal} #hbhrt-tool .tbl-wrap td:last-child{padding-bottom:0} #hbhrt-tool .tbl-wrap td.dash{display:none} } #hbhrt-tool{display:block;padding-top:48px} @media print{ body *{visibility:hidden} #hbhrt-tool .result, #hbhrt-tool .result *{visibility:visible} #hbhrt-tool .result{position:absolute;left:0;top:0;width:100%} #hbhrt-tool .ractions{display:none !important} } #ranges-email{background:#3A1B32 !important;padding:56px 24px !important} #ranges-email > div{max-width:672px;margin:0 auto;background:linear-gradient(180deg,#fffdf9,#f6ead6); border:1px solid rgba(201,168,76,.45);border-radius:20px;padding:36px 30px;text-align:center} #ranges-email h1,#ranges-email h2,#ranges-email h3{font-family:'Fraunces',Georgia,serif !important;font-weight:500 !important; font-size:1.6rem !important;line-height:1.25 !important;color:#33172E !important;margin:0 0 18px !important;letter-spacing:-.01em} #ranges-email .w-form{margin:0} #ranges-email form{display:flex;gap:8px;max-width:440px;margin:0 auto;flex-wrap:wrap;justify-content:center} #ranges-email input.w-input,#ranges-email input[type=email],#ranges-email input[type=text]{ flex:1 1 220px;min-width:0;font-family:'Mulish',sans-serif;font-size:15px;padding:13px 15px; border:1px solid rgba(51,23,46,.16) !important;border-radius:10px !important;background:#fff !important;color:#33172E !important;height:auto !important;margin:0 !important} #ranges-email input.w-input:focus{border-color:#C9A84C !important;box-shadow:0 0 0 3px rgba(201,168,76,.2) !important;outline:none} #ranges-email input.w-button,#ranges-email input[type=submit]{ flex:0 0 auto;font-family:'Mulish',sans-serif;font-weight:800;font-size:14px;color:#2a1c02 !important; background:#C9A84C !important;border:0 !important;padding:0 26px !important;height:48px;border-radius:10px !important;cursor:pointer; transition:filter .15s,transform .15s} #ranges-email input.w-button:hover{filter:brightness(1.05);transform:translateY(-1px)} #ranges-email .w-form-done,#ranges-email .w-form-fail{margin-top:14px;padding:12px 16px;border-radius:10px;font-size:14px} @media(max-width:600px){#ranges-email{padding:40px 16px !important}#ranges-email form{flex-direction:column} #ranges-email input.w-button{width:100%}#ranges-email h1,#ranges-email h2,#ranges-email h3{font-size:1.32rem !important} #ranges-email input.w-input,#ranges-email input[type=email],#ranges-email input[type=text]{flex:0 0 auto !important;width:100%}} #hbhrt-tool .opts.multi .opt.chk{cursor:pointer} #hbhrt-tool .opt.chk .box{flex:0 0 22px;width:22px;height:22px;border:1.5px solid var(--ink-12);border-radius:7px;position:relative;transition:all .15s;margin-top:1px} #hbhrt-tool .opt.chk.on .box{background:var(--plum);border-color:var(--plum)} #hbhrt-tool .opt.chk.on .box:after{content:"";position:absolute;left:7px;top:3px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)} #hbhrt-tool .opt.chk.on{border-color:var(--plum);background:rgba(90,46,78,.05)} #hbhrt-tool .reassure{font-family:var(--serif);font-style:italic;font-size:1.18rem;line-height:1.4;color:var(--plum);margin:0 0 22px;padding-left:16px;border-left:2px solid var(--rose)} #hbhrt-tool .rsec.urgent{background:var(--rose-soft);border:1px solid rgba(197,106,92,.35);border-radius:14px;padding:18px 20px;margin-bottom:18px} #hbhrt-tool .rsec.urgent h4{color:var(--rose-deep)} #hbhrt-tool .rsec.flags{background:var(--gold-soft);border:1px solid var(--gold-line);border-radius:14px;padding:18px 20px;margin-bottom:18px} #hbhrt-tool .rsec.flags h4{color:var(--gold-deep)} #hbhrt-tool .rsec.note-good{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin-bottom:18px} #hbhrt-tool .flag-list{list-style:none;margin:0;padding:0} #hbhrt-tool .flag-list li{position:relative;padding-left:18px;margin-bottom:12px;font-size:.98rem;line-height:1.55} #hbhrt-tool .flag-list li:last-child{margin-bottom:0} #hbhrt-tool .flag-list li:before{content:"";position:absolute;left:2px;top:9px;width:6px;height:6px;border-radius:99px;background:var(--gold-deep)} #hbhrt-tool .flag-list b{color:var(--ink)} #hbhrt-tool .rlinks{display:flex;flex-wrap:wrap;gap:10px} #hbhrt-tool .rlinks a{font-size:.95rem;color:var(--plum);text-decoration:none;border:1px solid var(--line);border-radius:99px;padding:9px 15px;transition:all .14s;font-weight:600} #hbhrt-tool .rlinks a:hover{border-color:var(--plum);background:rgba(90,46,78,.06)} #hbhrt-tool .srclist{margin:0;padding-left:22px} #hbhrt-tool .srclist li{font-size:.9rem;color:var(--ink-70);margin-bottom:12px;line-height:1.5} #hbhrt-tool .srclist a{color:var(--rose-deep);text-decoration:underline;text-underline-offset:2px} #hbhrt-tool .symhead{display:grid;grid-template-columns:1fr repeat(4,48px);gap:5px;align-items:end;margin-bottom:4px} #hbhrt-tool .symhead .sh{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.04em;color:var(--ink-70);text-align:center;text-transform:uppercase} #hbhrt-tool .symrow{display:grid;grid-template-columns:1fr repeat(4,48px);gap:5px;align-items:center;padding:9px 0;border-top:1px solid var(--paper-2)} #hbhrt-tool .symrow .sl{font-size:14px;font-weight:700;color:var(--ink)} #hbhrt-tool .sbtn{height:32px;border-radius:9px;border:1.5px solid var(--ink-12);background:var(--card);cursor:pointer;transition:all .12s;position:relative} #hbhrt-tool .sbtn:hover{border-color:var(--gold-line)} #hbhrt-tool .sbtn.on{border-color:var(--rose);background:var(--rose)} #hbhrt-tool .sbtn.on::after{content:"";position:absolute;inset:0;margin:auto;width:8px;height:8px;border-radius:50%;background:#fff} @media(max-width:600px){#hbhrt-tool .symhead,#hbhrt-tool .symrow{grid-template-columns:1fr repeat(4,38px)}} #ranges-email,#menopause-email,#hrt-email{background:#3A1B32 !important;padding:56px 24px !important} #ranges-email > div,#menopause-email > div,#hrt-email > div{max-width:672px;margin:0 auto;background:linear-gradient(180deg,#fffdf9,#f6ead6);border:1px solid rgba(201,168,76,.45);border-radius:20px;padding:36px 30px;text-align:center} #ranges-email h1,#ranges-email h2,#ranges-email h3,#menopause-email h1,#menopause-email h2,#menopause-email h3,#hrt-email h1,#hrt-email h2,#hrt-email h3{font-family:'Fraunces',Georgia,serif !important;font-weight:500 !important;font-size:1.6rem !important;line-height:1.25 !important;color:#33172E !important;margin:0 0 18px !important;letter-spacing:-.01em} #ranges-email .w-form,#menopause-email .w-form,#hrt-email .w-form{margin:0} #ranges-email form,#menopause-email form,#hrt-email form{display:flex;gap:8px;max-width:440px;margin:0 auto;flex-wrap:wrap;justify-content:center} #ranges-email input.w-input,#ranges-email input[type=email],#ranges-email input[type=text],#menopause-email input.w-input,#menopause-email input[type=email],#menopause-email input[type=text],#hrt-email input.w-input,#hrt-email input[type=email],#hrt-email input[type=text]{flex:1 1 220px;min-width:0;font-family:'Mulish',sans-serif;font-size:15px;padding:13px 15px;border:1px solid rgba(51,23,46,.16) !important;border-radius:10px !important;background:#fff !important;color:#33172E !important;height:auto !important;margin:0 !important} #ranges-email input.w-input:focus,#menopause-email input.w-input:focus,#hrt-email input.w-input:focus{border-color:#C9A84C !important;box-shadow:0 0 0 3px rgba(201,168,76,.2) !important;outline:none} #ranges-email input.w-button,#ranges-email input[type=submit],#menopause-email input.w-button,#menopause-email input[type=submit],#hrt-email input.w-button,#hrt-email input[type=submit]{flex:0 0 auto;font-family:'Mulish',sans-serif;font-weight:800;font-size:14px;color:#2a1c02 !important;background:#C9A84C !important;border:0 !important;padding:0 26px !important;height:48px;border-radius:10px !important;cursor:pointer;transition:filter .15s,transform .15s} #ranges-email input.w-button:hover,#menopause-email input.w-button:hover,#hrt-email input.w-button:hover{filter:brightness(1.05);transform:translateY(-1px)} #ranges-email .w-form-done,#ranges-email .w-form-fail,#menopause-email .w-form-done,#menopause-email .w-form-fail,#hrt-email .w-form-done,#hrt-email .w-form-fail{margin-top:14px;padding:12px 16px;border-radius:10px;font-size:14px} @media(max-width:600px){#ranges-email,#menopause-email,#hrt-email{padding:40px 16px !important}#ranges-email form,#menopause-email form,#hrt-email form{flex-direction:column}#ranges-email input.w-button,#menopause-email input.w-button,#hrt-email input.w-button{width:100%}#ranges-email h1,#ranges-email h2,#ranges-email h3,#menopause-email h1,#menopause-email h2,#menopause-email h3,#hrt-email h1,#hrt-email h2,#hrt-email h3{font-size:1.32rem !important}#ranges-email input.w-input,#ranges-email input[type=email],#menopause-email input.w-input,#menopause-email input[type=email],#hrt-email input.w-input,#hrt-email input[type=email]{flex:0 0 auto !important;width:100%}}`;
    document.head.appendChild(st);
  }


  // EMBED detection — matches the flagship convention
  var EMBED = false;
  try { EMBED = /[?&]embed=1\b/.test(location.search) || window.self !== window.top; } catch (e) { EMBED = true; }
  var TB = EMBED ? ' target="_blank" rel="noopener"' : '';

  m.innerHTML = '<div class="wrap"><header class="hero">'
    + '<div class="eyebrow">HRT decision guide \u00b7 Women</div>'
    + '<h1>Is HRT right <em>for me?</em></h1>'
    + '<p class="lede">You do not have to decide alone, and you do not have to walk into the appointment unsure of what to say. This guide turns what you are feeling into a clear, personalised set of questions to raise with your doctor \u2014 grounded in current <strong>NICE</strong> guidance.</p>'
    + '<p class="byline">A reference companion to <em>The Hormone Blueprint</em></p>'
    + '</header>'

    // ---------------- ASSESSMENT ----------------
    + '<section class="assess" id="assess" aria-label="HRT conversation guide">'
    + '<div class="aprog"><i id="prog" style="width:25%"></i></div>'
    + '<div class="atop"><span class="astep" id="stepc">Step 1 of 4</span><span class="aname">HRT conversation guide</span></div>'
    + '<div class="aview">'

    // step 1: stage
    + '<div class="step on" data-step="stage">'
    + '<div class="qlead">Where are you in the menopause transition?</div>'
    + '<div class="qhelp">HRT treats the symptoms of this transition, so this places you on the map. Choose whichever fits best.</div>'
    + '<div class="opts" id="q-stage">'
    + opt('stage', 'regular', 'Periods still regular')
    + opt('stage', 'changing', 'Periods have changed', 'Closer, further apart, heavier or lighter than before')
    + opt('stage', 'stopped_recent', 'Periods stopped less than 12 months ago')
    + opt('stage', 'stopped_year', 'No period for 12 months or more')
    + opt('stage', 'no_uterus', 'I have had my womb removed', 'Hysterectomy')
    + opt('stage', 'unsure', 'I\u2019m not sure')
    + '</div></div>'

    // step 2: age
    + '<div class="step" data-step="age">'
    + '<div class="qlead">Which age band are you in?</div>'
    + '<div class="qhelp">Age matters. Before 45, the balance of benefits and risks is different, and HRT is often actively recommended.</div>'
    + '<div class="opts" id="q-age">'
    + opt('age', 'u40', 'Under 40')
    + opt('age', '40_45', '40 to 45')
    + opt('age', '46_55', '46 to 55')
    + opt('age', 'o55', 'Over 55')
    + '</div></div>'

    // step 3: symptoms (scored 0-3)
    + '<div class="step" data-step="sym">'
    + '<div class="qlead">How much are these affecting you lately?</div>'
    + '<div class="qhelp">Tap a level for each. These are the symptoms HRT is recognised to help.</div>'
    + '<div class="symhead"><div></div><div class="sh">None</div><div class="sh">Mild</div><div class="sh">Mod</div><div class="sh">Severe</div></div>'
    + '<div id="symwrap"></div>'
    + '</div>'

    // step 4: discuss-first flags
    + '<div class="step" data-step="flags">'
    + '<div class="qlead">Do any of these apply to you?</div>'
    + '<div class="qhelp">These are not reasons you \u201ccan\u2019t\u201d have HRT. They are things worth raising, because they may change the <em>type</em> your doctor suggests. Select any that apply.</div>'
    + '<div class="opts multi" id="q-flags">'
    + chk('f_breast', 'A personal history of breast cancer')
    + chk('f_clot', 'A history of blood clots or stroke', 'DVT, pulmonary embolism or stroke')
    + chk('f_bleed', 'Unexplained vaginal bleeding', 'Bleeding between periods, after sex, or after menopause')
    + chk('f_liver', 'Liver disease')
    + chk('f_migraine', 'Migraine with aura')
    + chk('f_none', 'None of these apply', null, true)
    + '</div></div>'

    + '</div>' // .aview
    + '<div class="anav">'
    + '<button type="button" class="back" id="back" hidden>\u2190 Back</button>'
    + '<button type="button" class="next" id="next">Continue \u2192</button>'
    + '</div>'
    + '<div class="privline">Private \u2014 nothing is sent anywhere. Educational only, not a diagnosis.</div>'
    + '</section>'

    // ---------------- RESULT ----------------
    + '<div class="result" id="result" role="region" aria-live="polite">'
    + '<div class="rcard">'
    + '<div class="rhead">'
    + '<div class="rk">Your HRT conversation guide</div>'
    + '<div class="rstage" id="rHead"></div>'
    + '<div class="rsub" id="rDate"></div>'
    + '</div>'
    + '<div class="rbody">'
    + '<p class="reassure" id="rReassure"></p>'
    + '<div id="rUrgent"></div>'
    + '<div class="rsec"><p id="rLead"></p></div>'
    + '<div class="rsec"><h4>What to raise with your GP</h4><ol class="steps-list" id="rAsk"></ol></div>'
    + '<div id="rFlags"></div>'
    + '<div class="rsec note-good"><h4>One thing worth knowing</h4><p>Many women avoid HRT because of headlines from twenty years ago. Current guidance (<strong>NICE</strong>) is clear that, overall, taking HRT is unlikely to increase or decrease your life expectancy<sup class="cit"><a href="#sources"' + TB + '>1</a></sup> \u2014 and that the decision should be an informed one, made with you, not for you.</p></div>'
    + '<div class="rsec"><h4>Read next</h4><div class="rlinks">'
    + '<a href="/womens-articles/truth-about-hrt-research"' + TB + '>The truth about HRT</a>'
    + '<a href="/perimenopause-blood-test"' + TB + '>Which blood tests help</a>'
    + '<a href="/hormone-quiz"' + TB + '>Take the Hormone Quiz</a>'
    + '</div></div>'
    + '<div class="ractions">'
    + '<button type="button" class="primary" id="printBtn">\u2318 Save / print for your doctor</button>'
    + '<button type="button" id="retake">\u21bb Start again</button>'
    + '</div>'
    + '</div>'
    + '<div class="rnote">This guide is educational and is not medical advice or a diagnosis. It cannot see your full history. Any decision about starting, changing or stopping HRT should be made with a qualified clinician. Based on NICE guideline NG23 (Menopause: identification and management)<sup class="cit"><a href="#sources"' + TB + '>1</a></sup> and British Menopause Society guidance<sup class="cit"><a href="#sources"' + TB + '>2</a></sup>.</div>'
    + '</div>'
    + '</div>'

    // ---------------- ARTICLE (education + credibility) ----------------
    + '<article>'
    + '<section class="blk">'
    + '<div class="kicker">The basics</div>'
    + '<h2>What HRT actually does \u2014 and what it treats</h2>'
    + '<p>Hormone replacement therapy tops up the oestrogen (and, if you still have a womb, progesterone) that falls during the menopause transition. It is the <strong>most effective treatment</strong> for the classic symptoms \u2014 hot flushes and night sweats \u2014 and NICE recommends it as the first-line option for them.<sup class="cit"><a href="#sources"' + TB + '>1</a></sup> It also helps disrupted sleep, mood changes arising in perimenopause, and vaginal dryness, and it protects bone strength over the longer term.</p>'
    + '<p>What it is <em>not</em> is a single yes-or-no verdict a website can hand you. The right decision depends on your symptoms, your history, and what matters to you \u2014 which is exactly what a good conversation with your doctor is for. This guide helps you have that conversation well.</p>'
    + '</section>'

    + '<section class="blk">'
    + '<div class="kicker">The fear, addressed</div>'
    + '<h2>\u201cIsn\u2019t HRT dangerous?\u201d</h2>'
    + '<p>Most of that worry traces back to early reports from the <strong>Women\u2019s Health Initiative</strong> around 2002, which were widely misread and frightened a generation of women (and doctors) away from HRT.<sup class="cit"><a href="#sources"' + TB + '>3</a></sup> The picture has been substantially re-examined since. For most women under 60, or within ten years of menopause, the benefits of HRT for troublesome symptoms outweigh the risks, and NICE states plainly that HRT is <strong>unlikely to affect life expectancy</strong> either way.<sup class="cit"><a href="#sources"' + TB + '>1</a></sup></p>'
    + '<p>Risks are real but need context and are often smaller than assumed, and they depend heavily on the <em>type</em> of HRT. Oestrogen through the skin \u2014 a patch or gel \u2014 carries a lower clot risk than tablets, which is why it is often preferred for women with certain histories.<sup class="cit"><a href="#sources"' + TB + '>2</a></sup> The point is not that HRT is risk-free. It is that \u201cdangerous\u201d is too blunt a word, and the nuance is what your appointment is for.</p>'
    + '</section>'

    + '<section class="blk">'
    + '<div class="kicker">The nuance</div>'
    + '<h2>\u201cThings to discuss first\u201d are not \u201cyou can\u2019t\u201d</h2>'
    + '<p>A history of breast cancer, blood clots, liver disease or migraine with aura does not automatically rule HRT out. What these do is shift the conversation \u2014 towards a specialist, towards a particular type, or towards non-hormonal options if HRT truly is not suitable.<sup class="cit"><a href="#sources"' + TB + '>1,2</a></sup> One flag is different: <strong>unexplained vaginal bleeding</strong> should always be checked by a doctor before starting HRT, and promptly, whatever you decide.<sup class="cit"><a href="#sources"' + TB + '>1</a></sup> This tool treats all of these as things to <em>mention</em>, never as a verdict against you.</p>'
    + '</section>'

    + '<section class="blk" id="sources">'
    + '<div class="kicker">Sources</div>'
    + '<h2>Where this comes from</h2>'
    + '<ol class="srclist">'
    + '<li>National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/ng23"' + TB + '>Menopause: identification and management (NG23)</a>. Updated 2024. HRT is first-line for vasomotor symptoms; unlikely to affect life expectancy; unexplained bleeding should be investigated before starting HRT.</li>'
    + '<li>British Menopause Society. <a href="https://thebms.org.uk/publications/tools-for-clinicians/"' + TB + '>Tools for clinicians and HRT guidance</a>. Transdermal oestrogen (patch/gel) carries a lower venous thrombosis risk than oral; history of breast cancer warrants specialist input rather than automatic exclusion.</li>'
    + '<li>Manson JE, Chlebowski RT, Stefanick ML, et al. <a href="https://jamanetwork.com/journals/jama/fullarticle/1745676"' + TB + '>Menopausal Hormone Therapy and Health Outcomes During the Intervention and Extended Poststopping Phases of the Women\u2019s Health Initiative Randomized Trials</a>. <em>JAMA.</em> 2013;310(13):1353\u20131368. Re-analysis contextualising the original 2002 WHI findings.</li>'
    + '</ol>'
    + '</section>'
    + '</article>'
    + '</div>';

  // ---------- small template helpers used above (defined via function hoisting) ----------
  function opt(name, val, title, sub) {
    return '<label class="opt"><input type="radio" name="' + name + '" value="' + val + '"><span class="dot"></span>'
      + (sub ? '<span><span class="ot">' + title + '</span><span class="os">' + sub + '</span></span>' : '<span class="ot">' + title + '</span>')
      + '</label>';
  }
  function chk(val, title, sub, excl) {
    return '<label class="opt chk' + (excl ? ' excl' : '') + '" data-v="' + val + '"><span class="box"></span>'
      + (sub ? '<span><span class="ot">' + title + '</span><span class="os">' + sub + '</span></span>' : '<span class="ot">' + title + '</span>')
      + '</label>';
  }

  // ============================ LOGIC ============================
  buildLogic();

  function buildLogic() {
    var SYMPTOMS = [
      { id: 's_vaso', l: 'Hot flushes and night sweats' },
      { id: 's_sleep', l: 'Disrupted sleep' },
      { id: 's_mood', l: 'Mood changes, anxiety or irritability' },
      { id: 's_uro', l: 'Vaginal dryness or discomfort during sex' },
      { id: 's_phys', l: 'Joint aches, brain fog or fatigue' }
    ];
    var LVL = ['None', 'Mild', 'Moderate', 'Severe'];
    var FLAG_TEXT = {
      f_breast: 'A history of breast cancer makes this a more specialised conversation \u2014 one for a specialist rather than a quick decision, and there are non-hormonal options for symptoms too.',
      f_clot: 'This does not rule HRT out. Oestrogen through the skin (patch or gel) carries a lower clot risk than tablets, so ask specifically about transdermal HRT.',
      f_bleed: 'Unexplained bleeding should be checked by a doctor before starting HRT, and promptly, whatever you decide about HRT.',
      f_liver: 'Worth flagging, as it can influence which form of HRT is suitable.',
      f_migraine: 'Not a barrier to HRT \u2014 but transdermal oestrogen (patch or gel) is usually preferred, so mention it.'
    };
    var FLAG_LABEL = {
      f_breast: 'A personal history of breast cancer',
      f_clot: 'A history of blood clots or stroke',
      f_bleed: 'Unexplained vaginal bleeding',
      f_liver: 'Liver disease',
      f_migraine: 'Migraine with aura'
    };

    var state = { stage: null, age: null, sym: {}, flags: {} };
    SYMPTOMS.forEach(function (s) { state.sym[s.id] = 0; });

    // build symptom rows
    var sw = document.getElementById('symwrap');
    SYMPTOMS.forEach(function (s) {
      var row = document.createElement('div'); row.className = 'symrow';
      var lab = document.createElement('div'); lab.className = 'sl'; lab.textContent = s.l; row.appendChild(lab);
      for (var i = 0; i < 4; i++) {
        (function (i) {
          var b = document.createElement('button');
          b.type = 'button'; b.className = 'sbtn' + (i === 0 ? ' on' : '');
          b.setAttribute('aria-label', s.l + ': ' + LVL[i]);
          b.addEventListener('click', function () {
            state.sym[s.id] = i;
            row.querySelectorAll('.sbtn').forEach(function (x, xi) { x.classList.toggle('on', xi === i); });
          });
          row.appendChild(b);
        })(i);
      }
      sw.appendChild(row);
    });

    // flag selection (multi + exclusive "none")
    var flagWrap = document.getElementById('q-flags');
    flagWrap.querySelectorAll('.chk').forEach(function (lab) {
      lab.addEventListener('click', function () {
        var v = lab.getAttribute('data-v');
        if (lab.classList.contains('excl')) {
          var turnOn = !state.flags[v];
          state.flags = {}; if (turnOn) state.flags[v] = true;
        } else {
          state.flags[v] = !state.flags[v];
          if (state.flags[v]) delete state.flags.f_none;
        }
        flagWrap.querySelectorAll('.chk').forEach(function (l2) {
          l2.classList.toggle('on', !!state.flags[l2.getAttribute('data-v')]);
        });
      });
    });

    // stepper
    var ORDER = ['stage', 'age', 'sym', 'flags'];
    var steps = document.querySelectorAll('.step');
    var prog = document.getElementById('prog'), stepc = document.getElementById('stepc');
    var back = document.getElementById('back'), next = document.getElementById('next');
    var idx = 0;

    function radioVal(name) {
      var r = document.querySelector('input[name="' + name + '"]:checked');
      return r ? r.value : null;
    }
    function syncState() {
      state.stage = radioVal('stage');
      state.age = radioVal('age');
    }
    function valid() {
      syncState();
      if (ORDER[idx] === 'stage') return !!state.stage;
      if (ORDER[idx] === 'age') return !!state.age;
      return true; // symptoms + flags always valid (defaults / optional)
    }
    function show() {
      steps.forEach(function (s, i) { s.classList.toggle('on', i === idx); });
      prog.style.width = ((idx + 1) / ORDER.length * 100) + '%';
      stepc.textContent = 'Step ' + (idx + 1) + ' of ' + ORDER.length;
      back.hidden = idx === 0;
      next.textContent = (idx === ORDER.length - 1) ? 'See my guide \u2192' : 'Continue \u2192';
    }
    next.addEventListener('click', function () {
      if (!valid()) {
        var on = document.querySelector('.step.on .opts, .step.on #symwrap');
        if (on) { on.style.animation = 'none'; on.offsetHeight; on.style.animation = 'stepin .3s'; }
        return;
      }
      if (idx < ORDER.length - 1) { idx++; show(); scrollTop(); }
      else { renderResult(state, SYMPTOMS, FLAG_TEXT, FLAG_LABEL); }
    });
    back.addEventListener('click', function () { if (idx > 0) { idx--; show(); scrollTop(); } });

    // radios auto-advance feel: clicking selects, but Continue drives (keeps Back working)
    document.getElementById('q-stage').addEventListener('change', markSel);
    document.getElementById('q-age').addEventListener('change', markSel);
    function markSel(e) {
      var box = e.currentTarget;
      box.querySelectorAll('.opt').forEach(function (o) { o.classList.toggle('sel', o.querySelector('input').checked); });
    }

    document.getElementById('retake').addEventListener('click', function () {
      document.getElementById('result').classList.remove('show');
      document.getElementById('assess').style.display = '';
      idx = 0; show();
      document.querySelectorAll('.opts input').forEach(function (r) { r.checked = false; });
      document.querySelectorAll('.opt').forEach(function (o) { o.classList.remove('sel', 'on'); });
      state = { stage: null, age: null, sym: {}, flags: {} };
      SYMPTOMS.forEach(function (s) { state.sym[s.id] = 0; });
      document.querySelectorAll('#symwrap .symrow').forEach(function (row) {
        row.querySelectorAll('.sbtn').forEach(function (b, i) { b.classList.toggle('on', i === 0); });
      });
      scrollTop();
    });
    document.getElementById('printBtn').addEventListener('click', function () { window.print(); });

    show();

    function scrollTop() {
      var a = document.getElementById('assess');
      if (a && a.scrollIntoView) { try { a.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }
    }
  }

  // ============================ RESULT ============================
  function renderResult(state, SYMPTOMS, FLAG_TEXT, FLAG_LABEL) {
    function symTotal() { var t = 0; SYMPTOMS.forEach(function (s) { t += (state.sym[s.id] || 0); }); return t; }
    var total = symTotal(), vaso = state.sym.s_vaso || 0, uro = state.sym.s_uro || 0;
    var early = (state.age === 'u40' || state.age === '40_45');
    var menoish = (state.stage === 'stopped_year' || state.stage === 'stopped_recent' || state.stage === 'changing');
    function onlyUro() {
      var other = 0; SYMPTOMS.forEach(function (s) { if (s.id !== 's_uro') other += (state.sym[s.id] || 0); });
      return uro >= 2 && other <= 1;
    }

    var head, lead, ask = [], flagsActive = [], urgent = null;

    // headline + lead
    if (early && menoish) {
      head = 'This is a conversation worth having sooner rather than later';
      lead = 'Menopause symptoms before the age of 45 are treated differently. When the body reaches menopause early, replacing those hormones is often actively recommended, and the usual risk figures do not apply in the same way. This is worth raising with your GP without delay.';
    } else if (total >= 8 || vaso >= 2) {
      head = 'Your symptoms line up well with what HRT is designed to help';
      lead = 'Based on what you have told us, your symptoms are consistent with the menopause transition, and several \u2014 particularly hot flushes and night sweats \u2014 are ones for which HRT is the recognised first-line treatment. That makes an informed conversation with your GP a very reasonable next step.';
    } else if (total >= 3) {
      head = 'There is a worthwhile conversation to be had';
      lead = 'Your symptoms are in the milder-to-moderate range. HRT is one option, and so are non-hormonal approaches. The value of a GP conversation here is working out what is bothering you most and what is proportionate to it.';
    } else {
      head = 'Your symptoms are currently mild';
      lead = 'From what you have told us, symptoms are light at the moment. There may be no need for treatment yet \u2014 but knowing what to look for, and coming back to this if things change, puts you in control.';
    }

    // personalised asks
    if (vaso >= 2) ask.push('Say clearly that hot flushes and night sweats are affecting you \u2014 these are the symptoms HRT helps most, and the ones that make you a strong candidate for the conversation.');
    if (onlyUro()) ask.push('Your main symptom is vaginal dryness or discomfort. Ask specifically about local vaginal oestrogen \u2014 a low-dose treatment applied directly, which often resolves this without whole-body HRT.');
    else if (uro >= 2) ask.push('Mention the vaginal dryness or discomfort separately \u2014 it can be treated with local vaginal oestrogen alongside, or instead of, systemic HRT.');
    if ((state.sym.s_sleep || 0) >= 2 || (state.sym.s_mood || 0) >= 2) ask.push('Describe how sleep and mood are affected, and over how long \u2014 this helps your GP judge whether they are part of the hormonal picture or worth looking at separately.');
    if (state.stage === 'no_uterus') ask.push('Mention that you have had a hysterectomy \u2014 if you have no womb, oestrogen-only HRT is usually appropriate, which simplifies the choice.');
    ask.push('Ask what the options are for you specifically, including the type (patch, gel or tablet) and why one might suit you better than another.');
    ask.push('Ask what a typical review looks like \u2014 HRT is usually reviewed at three months and then yearly.');

    // flags
    ['f_breast', 'f_clot', 'f_bleed', 'f_liver', 'f_migraine'].forEach(function (k) {
      if (state.flags[k]) {
        if (k === 'f_bleed') urgent = FLAG_TEXT[k];
        else flagsActive.push({ label: FLAG_LABEL[k], text: FLAG_TEXT[k] });
      }
    });

    // reassurance (personalised to hardest symptom)
    var hardest = null, max = -1, HARD = { s_vaso: 'hot flushes and night sweats', s_sleep: 'sleep', s_mood: 'mood and anxiety', s_uro: 'intimacy and dryness', s_phys: 'aches and brain fog' };
    SYMPTOMS.forEach(function (s) { if ((state.sym[s.id] || 0) > max) { max = state.sym[s.id] || 0; hardest = s.id; } });
    var reassure = (max >= 2 && hardest)
      ? 'You told us ' + HARD[hardest] + ' are hardest right now \u2014 so let\u2019s make sure that\u2019s the first thing you raise.'
      : 'You don\u2019t have to have all the answers before you walk in \u2014 this is simply what to bring.';

    // paint
    document.getElementById('rHead').textContent = head;
    var dt = ''; try { dt = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) {}
    document.getElementById('rDate').textContent = 'Prepared for you' + (dt ? ' \u00b7 ' + dt : '');
    document.getElementById('rReassure').textContent = reassure;
    document.getElementById('rLead').textContent = lead;

    var uw = document.getElementById('rUrgent');
    uw.innerHTML = urgent
      ? '<div class="rsec urgent"><h4>Please get this checked promptly</h4><p>' + urgent + '</p></div>'
      : '';

    var ah = '';
    ask.forEach(function (a) { ah += '<li><span>' + a + '</span></li>'; });
    document.getElementById('rAsk').innerHTML = ah;

    var fw = document.getElementById('rFlags');
    if (flagsActive.length) {
      var fh = '<div class="rsec flags"><h4>Worth mentioning \u2014 not barriers</h4><ul class="flag-list">';
      flagsActive.forEach(function (f) { fh += '<li><b>' + f.label + '.</b> ' + f.text + '</li>'; });
      fh += '</ul></div>';
      fw.innerHTML = fh;
    } else { fw.innerHTML = ''; }

    document.getElementById('assess').style.display = 'none';
    var res = document.getElementById('result'); res.classList.add('show');
    if (res.scrollIntoView) { try { res.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }
  }

  // exposed for tests
  if (typeof window !== 'undefined') window.hbHrt = { rebuild: buildLogic, _render: renderResult };
})();

/* Deliver the HRT conversation-guide PDF when the email form is submitted.
   Uses a real click gesture (not the AJAX submit event) so the browser does not
   block the new tab, and always shows a visible download link on success as a fallback. */
(function () {
  var PDF = 'https://cdn.jsdelivr.net/gh/mingas/hb-menopause@e38c8a7c129cb4b8e1ef075640e15101f2aa5d5a/HRT-Conversation-Guide.pdf';

  function wire() {
    var sec = document.getElementById('hrt-email')
           || document.getElementById('menopause-email')
           || document.getElementById('ranges-email');
    if (!sec || sec.getAttribute('data-hrt-pdf') === '1') return;
    sec.setAttribute('data-hrt-pdf', '1');

    var form = sec.querySelector('form');
    var btn  = sec.querySelector('input[type=submit], button[type=submit], .w-button');
    var email = sec.querySelector('input[type=email], input.w-input');

    // 1) Open the PDF on the button's own click — a genuine user gesture, so it is not blocked.
    if (btn) {
      btn.addEventListener('click', function () {
        // only hand out the guide once an email has actually been entered
        if (email && !String(email.value || '').trim()) return;
        var w = window.open(PDF, '_blank');
        // if the popup was blocked, fall back to a same-tab navigation shortly after
        if (!w) { setTimeout(function () { try { window.location.href = PDF; } catch (e) {} }, 400); }
      });
    }

    // 2) When Webflow shows its success state, reveal a visible download link too.
    var done = sec.querySelector('.w-form-done');
    if (done) {
      var reveal = function () {
        if (done.querySelector('.hrt-dl')) return;
        done.innerHTML = 'Check your inbox. If your guide did not open, '
          + '<a class="hrt-dl" href="' + PDF + '" target="_blank" rel="noopener" '
          + 'style="color:#7d6317;font-weight:700;text-decoration:underline;">download it here</a>.';
      };
      // Webflow toggles the done block's display; watch for it becoming visible.
      if (window.MutationObserver) {
        new MutationObserver(reveal).observe(done, { attributes: true, attributeFilter: ['style'] });
      }
      if (form) form.addEventListener('submit', function () { setTimeout(reveal, 300); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();

/* Re-label the inherited email section for the HRT tool */
(function () {
  function fix() {
    var sec = document.getElementById('hrt-email')
           || document.getElementById('ranges-email')
           || document.getElementById('menopause-email');
    if (!sec) return;
    var h = sec.querySelector('h1,h2,h3');
    if (h) h.textContent = 'Email me my HRT conversation guide (PDF)';
    var em = sec.querySelector('input[type=email],input.w-input');
    if (em && !em.getAttribute('placeholder')) em.setAttribute('placeholder', 'you@email.com');
    var b = sec.querySelector('input[type=submit]');
    if (b) b.value = 'Send it';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fix); else fix();
})();
