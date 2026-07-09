(function(){var m=document.getElementById('hbmp-tool');if(m){m.innerHTML=`<div class="wrap"><header class="hero">
    <div class="eyebrow">Menopause assessment · Women</div>
    <h1>What stage of menopause <em>am I in?</em></h1>
    <p class="lede">A single blood test can mislead you — hormones swing wildly through the transition. This assessment reads your <strong>cycle and symptoms</strong> the way a clinician does, and places you on the medical menopause map.</p>
    <p class="byline">A reference companion to <em>The Hormone Blueprint</em></p>

    <div class="journey" aria-hidden="true">
      <div class="jtrack"><div class="jticks"><span class="jtick" style="left:25%"></span><span class="jtick" style="left:50%"></span><span class="jtick" style="left:75%"></span></div></div>
      <div class="jlabels"><span><b>Premenopause</b>regular cycles</span><span><b>Early peri</b>cycle shifts</span><span><b>Late peri</b>skipped periods</span><span><b>Postmenopause</b>12 months+</span></div>
    </div>
  </header>

  <!-- ASSESSMENT -->
  <section class="assess" id="assess" aria-label="Menopause stage assessment">
    <div class="aprog"><i id="prog" style="width:20%"></i></div>
    <div class="atop"><span class="astep" id="stepc">Step 1 of 5</span><span class="aname">Menopause stage assessment</span></div>
    <div class="aview">

      <div class="step on" data-step="age">
        <div class="qlead">First, how old are you?</div>
        <div class="qhelp">Age gives context — though your cycle and symptoms matter more than the number.</div>
        <div class="agebox">
          <div class="agenum"><span id="ageOut">47</span><small>years</small></div>
          <input type="range" class="slider" id="age" min="30" max="65" value="47" step="1" aria-label="Your age">
          <div class="sends"><span>30</span><span>65+</span></div>
        </div>
      </div>

      <div class="step" data-step="horm">
        <div class="qlead">Are you using any of these right now?</div>
        <div class="qhelp">Hormonal methods can mask the cycle changes that define each stage — so we read your result differently.</div>
        <div class="opts" id="q-horm">
          <label class="opt"><input type="radio" name="horm" value="none"><span class="dot"></span><span class="ot">None of these</span></label>
          <label class="opt"><input type="radio" name="horm" value="contra"><span class="dot"></span><span><span class="ot">Hormonal contraception or coil</span><span class="os">Pill, patch, implant, injection, Mirena, etc.</span></span></label>
          <label class="opt"><input type="radio" name="horm" value="hrt"><span class="dot"></span><span class="ot">HRT / menopause hormone therapy</span></label>
        </div>
      </div>

      <div class="step" data-step="last">
        <div class="qlead">When was your last period?</div>
        <div class="qhelp">The single most important question for staging.</div>
        <div class="opts" id="q-last">
          <label class="opt"><input type="radio" name="last" value="lt3"><span class="dot"></span><span class="ot">Within the last 3 months</span></label>
          <label class="opt"><input type="radio" name="last" value="3to11"><span class="dot"></span><span class="ot">3 to 11 months ago</span></label>
          <label class="opt"><input type="radio" name="last" value="12plus"><span class="dot"></span><span class="ot">12 months ago or longer</span></label>
          <label class="opt"><input type="radio" name="last" value="surgical"><span class="dot"></span><span><span class="ot">I don't have periods for another reason</span><span class="os">Hysterectomy, ablation, etc.</span></span></label>
        </div>
      </div>

      <div class="step" data-step="cycle">
        <div class="qlead">Over the past year, how have your periods changed?</div>
        <div class="qhelp">Compared with what was normal for you.</div>
        <div class="opts" id="q-cycle">
          <label class="opt"><input type="radio" name="cycle" value="reg"><span class="dot"></span><span class="ot">Still regular and predictable</span></label>
          <label class="opt"><input type="radio" name="cycle" value="var7"><span class="dot"></span><span><span class="ot">Length varies by a week or more</span><span class="os">Arriving noticeably earlier or later than usual</span></span></label>
          <label class="opt"><input type="radio" name="cycle" value="skip60"><span class="dot"></span><span><span class="ot">I'm skipping periods</span><span class="os">Gaps of two months or more</span></span></label>
        </div>
      </div>

      <div class="step" data-step="sym">
        <div class="qlead">How much are these affecting you lately?</div>
        <div class="qhelp">Tap a level for each. This builds your symptom score.</div>
        <div class="symhead"><div></div><div class="sh">None</div><div class="sh">Mild</div><div class="sh">Mod</div><div class="sh">Severe</div></div>
        <div id="symwrap"></div>
      </div>

    </div>
    <div class="anav">
      <button type="button" class="back" id="back" hidden>← Back</button>
      <button type="button" class="next" id="next">Continue →</button>
    </div>
    <div class="privline">Private — nothing is sent anywhere. Educational only, not a diagnosis.</div>
  </section>

  <!-- RESULT -->
  <div class="result" id="result" role="region" aria-live="polite">
    <div class="rcard">
      <div class="rhead">
        <div class="rk">Your likely stage</div>
        <div class="rstage" id="rStage"></div>
        <div class="rsub" id="rSub"></div>
        <div class="journey" id="rJourney">
          <div class="jtrack">
            <div class="jticks"><span class="jtick" style="left:25%"></span><span class="jtick" style="left:50%"></span><span class="jtick" style="left:75%"></span></div>
            <div class="jmarker" id="jmarker"><span class="jflag">You are here</span><span class="pin"></span></div>
          </div>
          <div class="jlabels"><span><b>Premenopause</b></span><span><b>Early peri</b></span><span><b>Late peri</b></span><span><b>Postmenopause</b></span></div>
        </div>
      </div>
      <div class="rbody">
        <div id="rFlags"></div>
        <div class="timing" id="rTiming"><span class="ti">Timeline</span><p id="rTimingText"></p></div>
        <div class="rsec"><h4>What this means</h4><p id="rMean"></p></div>
        <div class="rsec"><h4>Your symptom snapshot</h4><div class="doms" id="rDoms"></div></div>
        <div class="rsec"><h4>What to do next</h4><ol class="steps-list" id="rSteps"></ol></div>
        <div class="ractions">
          <button type="button" class="primary" id="printBtn">⎙ Save / print for your doctor</button>
          <button type="button" id="retake">↻ Retake the assessment</button>
        </div>
      </div>
      <div class="rnote">This self-assessment is based on the STRAW+10 staging criteria and a standard symptom checklist. It is educational and cannot diagnose menopause, rule out other causes of your symptoms, or replace a clinician who knows your history.</div>
    </div>
  </div>

  <!-- ARTICLE -->
  <article>
    <section class="blk">
      <div class="kicker">The map</div>
      <h2>The four stages of the menopause transition</h2>
      <p>Menopause isn't a single moment — it's a journey of several years. Clinicians describe it with the <strong>STRAW+10</strong> system, which stages you mainly by your <strong>bleeding pattern</strong>, because that tracks ovarian ageing more reliably than any one blood test.<sup class="cit"><a href="#sources">1</a></sup></p>
      <div class="stages4">
        <div class="st" style="--seg:#D9B36A"><div class="stnum">01 · STRAW −3</div><h3>Premenopause</h3><div class="sttag">Regular cycles</div><p>Periods are still regular and predictable. Fertility declines quietly, but hormones are broadly stable.</p></div>
        <div class="st" style="--seg:#CE9A5E"><div class="stnum">02 · STRAW −2</div><h3>Early perimenopause</h3><div class="sttag">Cycle varies ≥ 7 days</div><p>Cycle length starts to shift — periods arrive a week or more earlier or later than usual. Symptoms often begin here.</p></div>
        <div class="st" style="--seg:#CE8A62"><div class="stnum">03 · STRAW −1</div><h3>Late perimenopause</h3><div class="sttag">Gaps of 60+ days</div><p>You start skipping periods, with gaps of two months or more. Hot flushes and other symptoms are usually at their peak.</p></div>
        <div class="st" style="--seg:#7C4064"><div class="stnum">04 · STRAW +1</div><h3>Postmenopause</h3><div class="sttag">12 months, no period</div><p>Twelve full months with no period marks menopause. Levels settle low and stay there; symptoms often ease over time.</p></div>
      </div>
    </section>

    <section class="blk">
      <div class="kicker">Why not just test?</div>
      <h2>Why a single hormone test can mislead you</h2>
      <p>It's the most common trap. In perimenopause, oestradiol doesn't glide gently downward. In the landmark <strong>SWAN</strong> study of the menopause transition, researchers found <strong>four different oestradiol trajectories</strong> — and <strong>44.6% of women actually saw their oestradiol rise</strong> before their final period, rather than fall.<sup class="cit"><a href="#sources">2</a></sup> A blood test caught on a high day looks "normal"; the same woman a week later can look menopausal.</p>
      <p>As one Endocrine Society review puts it plainly: during the transition, hormone levels vary so markedly that <strong>FSH and oestradiol are unreliable guides to menopausal status</strong>.<sup class="cit"><a href="#sources">3</a></sup></p>
      <p>That's why major guidelines — including <strong>NICE</strong> — advise <strong>against</strong> using an FSH test to diagnose perimenopause in women over 45 with typical symptoms.<sup class="cit"><a href="#sources">4</a></sup> Clinicians read your <em>cycle pattern and symptoms</em> instead. Two women of the same age with the same oestradiol reading can feel completely different — so the number alone rarely settles anything.</p>
    </section>

    <section class="blk">
      <div class="kicker">For reference</div>
      <h2>Typical hormone levels by life stage</h2>
      <p>Useful background — but note the caveat below. These are not a way to self-diagnose your stage.</p>
      <div class="tbl-wrap">
      <table>
        <thead><tr><th>Life stage</th><th>Oestradiol (E2)</th><th>FSH</th><th>What's happening</th></tr></thead>
        <tbody>
          <tr><td data-l="Life stage">Reproductive years</td><td class="num" data-l="Oestradiol (E2)">30–400 pg/mL*</td><td class="num" data-l="FSH">&lt; 10 IU/L</td><td data-l="What’s happening">Cyclical rise and fall each month; *varies enormously by cycle day.</td></tr>
          <tr><td data-l="Life stage">Perimenopause</td><td class="num" data-l="Oestradiol (E2)">highly variable</td><td class="num" data-l="FSH">variable, rising</td><td data-l="What’s happening">Erratic swings — no reliable "normal". A single value means little.</td></tr>
          <tr><td data-l="Life stage">Postmenopause</td><td class="num" data-l="Oestradiol (E2)">&lt; 10–20 pg/mL</td><td class="num" data-l="FSH">&gt; 25–30 IU/L</td><td data-l="What’s happening">Ovarian oestrogen production has ceased; FSH stays high.</td></tr>
          <tr><td data-l="Hormone">Progesterone</td><td class="num" data-l="Pattern">falls first</td><td class="num dash" data-l="FSH">—</td><td data-l="What’s happening">Often the earliest change: cycles without ovulation produce little progesterone, even while oestrogen still swings.</td></tr>
          <tr><td data-l="Hormone">Testosterone</td><td class="num" data-l="Pattern">gradual decline</td><td class="num dash" data-l="FSH">—</td><td data-l="What’s happening">Falls slowly with age rather than at menopause; may even rise slightly afterwards.<sup class="cit"><a href="#sources">3</a></sup></td></tr>
        </tbody>
      </table>
      </div>
      <div class="tbl-note">Ranges vary by laboratory, assay and cycle day. During perimenopause especially, a single reading is an unreliable guide — which is why your stage is based on cycle pattern and symptoms, not a number.<sup class="cit"><a href="#sources">2,3</a></sup></div>
    </section>

    <section class="blk">
      <div class="kicker">Questions</div>
      <h2>Common questions</h2>
      <details><summary>How do I know what menopause stage I'm in?</summary><p>Mainly from your menstrual-cycle pattern, not a single blood test. Regular cycles = premenopause; a persistent change of 7+ days in length = early perimenopause; gaps of 60+ days = late perimenopause; 12 months with no period = menopause. That's the STRAW+10 system this tool uses.</p></details>
      <details><summary>Can a blood test tell me if I'm in perimenopause?</summary><p>Usually not reliably. Oestrogen and FSH fluctuate so much in perimenopause that a single test can look normal one week and menopausal the next. NICE advises against FSH testing to diagnose perimenopause in women over 45 with typical symptoms.</p></details>
      <details><summary>What age does perimenopause usually start?</summary><p>Most often the mid-40s, lasting around 4–7 years, with the final period at an average age of about 51. It can start earlier — and menopause before 40 (premature ovarian insufficiency) should be assessed by a doctor.</p></details>
      <details><summary>Is this assessment a diagnosis?</summary><p>No — it's an educational self-assessment based on STRAW+10 and a symptom checklist. It helps you understand where you are and what to discuss with a clinician, but doesn't replace medical advice.</p></details>
    </section>

    <section class="about">
      <div class="k">About this assessment</div>
      <p><b>How it stages you.</b> Your result uses the <b>STRAW+10</b> criteria — the international standard for staging reproductive ageing — applied to your cycle pattern, with age and symptoms for context. STRAW+10 stages by bleeding pattern because that follows a predictable path even though hormone levels are erratic.</p>
      <p><b>Your symptom score.</b> The snapshot groups your answers into three domains (physical, psychological, urogenital), mirroring the structure of the validated Menopause Rating Scale — a common way clinicians and researchers quantify menopausal symptoms.</p>
      <p><b>How we keep it honest.</b> Where cycles are masked (hormonal contraception, HRT or surgery), the tool says so rather than guessing a stage. Every clinical claim is sourced below. This is educational and is not a diagnosis.</p>
    </section>

    <section class="sources" id="sources">
      <div class="k">Sources</div>
      <ol>
        <li>Harlow SD, Gass M, Hall JE, et al. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3340903/" target="_blank" rel="noopener">Executive summary of the Stages of Reproductive Aging Workshop +10 (STRAW+10)</a>. <em>Fertil Steril / J Clin Endocrinol Metab.</em> 2012.</li>
        <li>Tepper PG, Randolph JF, McConnell DS, et al. <a href="https://academic.oup.com/jcem/article/97/8/2872/2823428" target="_blank" rel="noopener">Trajectory Clustering of Estradiol and FSH during the Menopausal Transition (SWAN)</a>. <em>J Clin Endocrinol Metab.</em> 2012;97(8):2872–2880. Four distinct oestradiol trajectories were identified; 44.6% of women showed a <em>rise</em> in oestradiol before their final period.</li>
        <li>Burger HG, Dudley EC, Robertson DM, Dennerstein L. Hormonal changes in the menopause transition. <a href="https://www.endocrine.org/~/media/endosociety/files/ep/rphr/57/rphr_vol_57_ch_12_hormonal_changes.pdf" target="_blank" rel="noopener">Recent Prog Horm Res.</a> 2002;57:257–275. During the transition, hormone levels vary markedly — measures of FSH and oestradiol are unreliable guides to menopausal status.</li>
        <li>National Institute for Health and Care Excellence (NICE). <em>Menopause: diagnosis and management (NG23)</em> — do not use FSH to diagnose perimenopause in women over 45 with typical symptoms.</li>
        <li>El Khoudary SR, Greendale G, Crawford SL, et al. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6082400/" target="_blank" rel="noopener">The menopause transition and women's health at midlife: a progress report from SWAN</a>. <em>Menopause.</em> 2019. Oestradiol falls sharply from about two years before the final period; the transition typically spans several years.</li>
        <li>Heinemann LAJ, et al. The Menopause Rating Scale (MRS): a methodological review. <em>Health Qual Life Outcomes.</em> 2004.</li>
        <li><em>The Hormone Blueprint</em> — reference companion (life-stage context and symptom guidance).</li>
      </ol>
      <div class="rev">Compiled, sourced and editorially reviewed by The Hormone Blueprint · Last reviewed 7 July 2026</div>
    </section>
  </article>
</div></div>`;}})();
(function(){
  var SYM=[
    {id:'hot',l:'Hot flushes',d:'som'},{id:'sweat',l:'Night sweats',d:'som'},{id:'sleep',l:'Sleep problems',d:'som'},{id:'joint',l:'Joint & muscle aches',d:'som'},
    {id:'mood',l:'Mood swings / irritability',d:'psy'},{id:'low',l:'Anxiety or low mood',d:'psy'},{id:'fog',l:'Brain fog / memory',d:'psy'},{id:'tired',l:'Fatigue / exhaustion',d:'psy'},
    {id:'dry',l:'Vaginal dryness',d:'uro'},{id:'libido',l:'Low libido',d:'uro'},{id:'bladder',l:'Bladder / urinary changes',d:'uro'}
  ];
  var DOMS={som:{max:12},psy:{max:12},uro:{max:9}};
  var LVL=['None','Mild','Moderate','Severe'];
  var state={age:47,horm:null,last:null,cycle:null,sym:{}};

  // symptom grid
  var sw=document.getElementById('symwrap');
  SYM.forEach(function(s){
    state.sym[s.id]=0;
    var row=document.createElement('div');row.className='symrow';
    var lab=document.createElement('div');lab.className='sl';lab.textContent=s.l;row.appendChild(lab);
    for(var i=0;i<4;i++){(function(i){
      var b=document.createElement('button');b.type='button';b.className='sbtn';b.setAttribute('aria-label',s.l+': '+LVL[i]);
      if(i===0)b.classList.add('on');
      b.addEventListener('click',function(){state.sym[s.id]=i;row.querySelectorAll('.sbtn').forEach(function(x,xi){x.classList.toggle('on',xi===i);});});
      row.appendChild(b);
    })(i);}
    sw.appendChild(row);
  });

  // age slider
  var age=document.getElementById('age'), ageOut=document.getElementById('ageOut');
  age.addEventListener('input',function(){state.age=+age.value;ageOut.textContent=(+age.value>=65?'65+':age.value);});

  // options
  ['horm','last','cycle'].forEach(function(n){
    var g=document.getElementById('q-'+n);
    g.addEventListener('change',function(e){
      g.querySelectorAll('.opt').forEach(function(o){o.classList.toggle('sel',o.querySelector('input').checked);});
      state[n]=e.target.value;
    });
  });

  // ---- stepped flow ----
  var order=['age','horm','last','cycle','sym'], cur=0;
  var steps=document.querySelectorAll('.step');
  var prog=document.getElementById('prog'), stepc=document.getElementById('stepc');
  var back=document.getElementById('back'), next=document.getElementById('next');
  function visibleOrder(){ // skip cycle when last period is 12+ or surgical (irrelevant)
    return order.filter(function(s){ if(s==='cycle' && (state.last==='12plus'||state.last==='surgical')) return false; return true; });
  }
  function show(){
    var vo=visibleOrder(); var key=vo[cur];
    steps.forEach(function(st){st.classList.toggle('on',st.getAttribute('data-step')===key);});
    prog.style.width=Math.round((cur+1)/vo.length*100)+'%';
    stepc.textContent='Step '+(cur+1)+' of '+vo.length;
    back.hidden=cur===0;
    next.textContent = cur===vo.length-1 ? 'Reveal my stage →' : 'Continue →';
  }
  function valid(){
    var vo=visibleOrder(), key=vo[cur];
    if(key==='age') return true;
    if(key==='sym') return true;
    return !!state[key];
  }
  next.addEventListener('click',function(){
    var vo=visibleOrder();
    if(!valid()){ var on=document.querySelector('.step.on .opts'); if(on){on.style.animation='none';on.offsetHeight;on.style.animation='stepin .3s';} return; }
    if(cur===vo.length-1){ render(classify()); return; }
    cur++; if(cur>=visibleOrder().length)cur=visibleOrder().length-1; show();
  });
  back.addEventListener('click',function(){ if(cur>0){cur--;show();} });

  function domScore(d){var t=0;SYM.forEach(function(s){if(s.d===d)t+=state.sym[s.id];});return t;}
  function vasoHigh(){return (state.sym.hot||0)+(state.sym.sweat||0)>=2;}

  // ---- STRAW+10 staging (unchanged, verified logic) ----
  function classify(){
    var a=state, flags=[], vaso=vasoHigh();
    function R(o){o.flags=flags;return o;}
    if(a.horm==='hrt'){
      if(a.last==='12plus') flags.push(['Any unexpected bleeding? See a doctor','Some bleeding can be expected on HRT, but bleeding that is new, heavy, or outside your usual pattern should always be checked promptly.']);
      return R({key:'hrt',tl:-1,stage:'On HRT \u2014 read by symptoms',sub:'Menopause hormone therapy changes your bleeding pattern, so cycle-based staging doesn\u2019t apply. What matters now is how well your symptoms are controlled.',
        mean:'Because you\u2019re taking HRT, the usual cycle milestones can\u2019t place you on the map \u2014 and that\u2019s expected. The goal of therapy is symptom control, guided by how you feel rather than by a test. Your snapshot below shows where things stand.',
        time:'On HRT, what matters is symptom control over time \u2014 not where you sit on the map. Most women review their dose with a clinician within the first <b>3\u20136 months</b>, then annually.',
        steps:[['Review with your prescriber','Use your symptom score to discuss whether your type or dose of HRT is giving enough relief.'],['Track your symptoms','Log how you feel week to week \u2014 our <a href="/hormone-quiz">daily tracker</a> makes patterns visible.'],['Read the deeper guide','The full method is in <em>The Hormone Blueprint</em>.','/hormone-blueprint']]});
    }
    if(a.horm==='contra'){
      if(a.age&&a.age<40&&vaso) flags.push(['Worth checking early','Menopausal symptoms under 40 deserve a medical review to rule out early menopause and other causes.']);
      return R({key:'contra',tl:-1,stage:'On contraception \u2014 cycles are masked',sub:'Hormonal contraception controls or removes your natural bleeding, which hides the cycle changes that define each stage.',
        mean:'Your pill, coil, implant or injection sets your bleeding pattern, so it can\u2019t stage the transition. Your <b>age and symptoms</b> are still meaningful, though \u2014 and the snapshot below reflects them.',
        time:'Perimenopause typically begins around the <b>mid-40s</b> (median age 47) and lasts about <b>4\u20137 years</b>. Contraception hides the cycle signs, but the underlying transition still runs on that clock.',
        steps:[['Go by symptoms + age','If you\u2019re in the typical age window with menopausal symptoms, that\u2019s the signal \u2014 not your bleeding pattern.'],['Ask about a review','A clinician can discuss whether your method is still the best fit as you approach menopause.'],['Track what you feel','Our <a href="/hormone-quiz">symptom tracker</a> gives you the record your bleeding pattern can\u2019t.']]});
    }
    if(a.last==='surgical'){
      if(a.age&&a.age<45&&vaso) flags.push(['Consider an earlier review','Menopausal symptoms before 45 are worth assessing sooner rather than later.']);
      return R({key:'surgical',tl:-1,stage:'No natural periods \u2014 read by symptoms',sub:'Without a menstrual cycle to read (after a hysterectomy or similar), stage can\u2019t be set from bleeding alone.',
        mean:'Since you don\u2019t have periods for surgical or other reasons, cycle milestones don\u2019t apply. If your ovaries are still present you may still transition through menopause \u2014 read by symptoms and, if useful, an FSH test (which is more reliable here than in a menstruating woman).',
        time:'If your ovaries remain, menopause usually arrives around the <b>average age of 51</b> \u2014 you simply won\u2019t see it in your bleeding. Symptoms are your signal.',
        steps:[['Use symptoms as your guide','Your snapshot shows your current load; bring it to a clinician.'],['Ask whether testing helps','With no cycle to follow, an FSH test can add information \u2014 discuss it with your doctor.'],['Track it over time','Our <a href="/hormone-quiz">daily tracker</a> turns scattered symptoms into a clear record.']]});
    }
    if(a.last==='12plus'){
      if(a.age&&a.age<40) flags.push(['See a doctor \u2014 menopause before 40','Reaching menopause under 40 is called premature ovarian insufficiency. It should be confirmed and managed by a doctor to protect long-term bone and heart health.']);
      else if(a.age&&a.age<45) flags.push(['Early menopause \u2014 worth a review','Menopause between 40 and 44 is called early menopause. It is worth discussing with a clinician, including support for bone and heart health.']);
      flags.push(['Any new bleeding? See a doctor','Once you\u2019ve gone 12 months without a period, <b>any</b> bleeding is not normal and should be checked promptly.']);
      return R({key:'post',tl:3,stage:'Postmenopause',sub:'Twelve or more months without a period means you\u2019ve reached menopause. Your body has settled into a new, lower-hormone baseline.',
        mean:'You\u2019ve passed the menopause milestone. Oestrogen now stays consistently low. Many symptoms ease over the first few years, but low oestrogen has longer-term effects on <b>bone and heart health</b> worth protecting.',
        time:'You reached menopause when you passed <b>12 months</b> without a period. Symptoms often ease over the following <b>2\u20135 years</b>, though some \u2014 dryness in particular \u2014 can persist without treatment.',
        steps:[['Protect bone & heart','Ask about bone health, blood pressure and cholesterol \u2014 low oestrogen raises these risks.'],['Treat lingering symptoms','Hot flushes, dryness or sleep issues can still be treated \u2014 you don\u2019t have to just live with them.'],['Explore your options','<em>The Hormone Blueprint</em> covers postmenopausal wellbeing and HRT.','/hormone-blueprint']]});
    }
    if(a.last==='3to11' || a.cycle==='skip60'){
      if(a.age&&a.age<40) flags.push(['See a doctor \u2014 under 40','Skipping periods and menopausal symptoms before 40 needs assessment to rule out premature ovarian insufficiency.']);
      return R({key:'late',tl:2,stage:'Late perimenopause',sub:'Skipping periods with gaps of two months or more places you in the late transition \u2014 usually the peak of symptoms.',
        mean:'Your cycle now has long gaps (60+ days), marking <b>late perimenopause</b> \u2014 the home straight before menopause. Symptoms such as hot flushes often peak here; periods become less frequent until they stop for good.',
        time:'Late perimenopause usually lasts <b>1\u20133 years</b>. Once you pass <b>12 months</b> with no period, you\u2019ve reached menopause \u2014 on average around age <b>51</b>.',
        steps:[['Name it, then treat it','This stage is the most responsive to symptom relief \u2014 lifestyle, non-hormonal options or HRT.'],['Keep tracking your cycle','Note each period; reaching 12 months from your last one confirms menopause. Our <a href="/hormone-quiz">tracker</a> does the counting.'],['Read the method','<em>The Hormone Blueprint</em>, chapter on the transition.','/hormone-blueprint']]});
    }
    if(a.cycle==='var7'){
      if(a.age&&a.age<40) flags.push(['Worth a check under 40','Cycle changes with menopausal symptoms before 40 deserve a medical review.']);
      return R({key:'early',tl:1,stage:'Early perimenopause',sub:'Your cycle length has started to shift by a week or more \u2014 the first formal marker of the transition.',
        mean:'A persistent change of 7+ days in cycle length marks <b>early perimenopause</b>. Your ovaries are becoming less predictable, and symptoms often begin around now \u2014 even while periods still come most months.',
        time:'The whole transition typically runs <b>4\u20137 years</b>, beginning at a median age of <b>47</b>. Starting earlier than that tends to mean a longer, more symptomatic transition \u2014 so noticing it now is genuinely useful.',
        steps:[['Start a simple cycle log','Tracking length and symptoms makes the pattern clear \u2014 our <a href="/hormone-quiz">daily tracker</a> is built for this.'],['Treat symptoms early','You don\u2019t need to wait until periods stop \u2014 relief is available now.'],['Learn what\u2019s ahead','<em>The Hormone Blueprint</em> maps the whole transition.','/hormone-blueprint']]});
    }
    if(a.age&&a.age<40&&vaso) flags.push(['Symptoms under 40 \u2014 see a doctor','Menopausal-type symptoms before 40 need a medical review to rule out premature ovarian insufficiency and other causes.']);
    else if(a.age&&a.age<45&&vaso) flags.push(['Symptoms before 45 \u2014 worth discussing','Menopausal symptoms before 45 are worth reviewing with a clinician. Unlike at 45 and over, blood tests can add useful information in this age group.']);
    else if(a.age&&a.age>=45&&vaso) flags.push(['Symptoms despite regular cycles?','Perimenopause can start with symptoms before your cycle changes. From 45, guidelines identify perimenopause from recently started vasomotor symptoms, so if they persist it is worth a conversation with your clinician.']);
    return R({key:'pre',tl:0,stage:'Premenopause',sub:'Your cycles are still regular, so you\u2019re not yet in the transition \u2014 though symptoms can still be worth addressing.',
      mean:'Regular, predictable cycles mean you\u2019re <b>premenopausal</b> \u2014 the transition hasn\u2019t formally begun. If you\u2019re having symptoms, they may have another cause worth exploring, or you may be right at the doorway of change.',
      time:'For most women the transition begins in the <b>mid-40s</b> (median 47) and lasts <b>4\u20137 years</b>, with the final period around <b>51</b>. Knowing your baseline now makes the first changes easy to spot.',
      steps:[['Note your baseline','Knowing your normal cycle now makes it easy to spot the first changes later. Start with our <a href="/hormone-quiz">daily tracker</a>.'],['Check other causes','Thyroid, stress, iron and sleep are worth reviewing if symptoms bother you.'],['Get ahead of it','<em>The Hormone Blueprint</em> helps you prepare.','/hormone-blueprint']]});
  }

  function bar(dn,score,max){
    var pct=Math.round(score/max*100);
    var band=pct>=83?'Severe':pct>=50?'Moderate':pct>=17?'Mild':'Minimal';
    return '<div class="dom"><div class="dom-top"><span class="dom-name">'+dn+'</span><span class="dom-val">'+band+'</span></div><div class="bar"><i style="width:'+Math.max(pct,3)+'%"></i></div></div>';
  }
  function render(r){
    document.getElementById('rStage').textContent=r.stage;
    document.getElementById('rSub').textContent=r.sub;
    document.getElementById('rMean').innerHTML=r.mean;
    var tw=document.getElementById('rTiming');
    if(r.time){document.getElementById('rTimingText').innerHTML=r.time;tw.style.display='';}else{tw.style.display='none';}
    var j=document.getElementById('rJourney'), mk=document.getElementById('jmarker');
    if(r.tl>=0){ j.style.display=''; mk.style.left=(12.5+r.tl*25)+'%'; }
    else { j.style.display='none'; }
    var fh='';r.flags.forEach(function(f){fh+='<div class="flag"><span class="fi">!</span><div><div class="ft">'+f[0]+'</div><p>'+f[1]+'</p></div></div>';});
    document.getElementById('rFlags').innerHTML=fh;
    document.getElementById('rDoms').innerHTML=
      bar('Physical \u2014 hot flushes, sleep, aches',domScore('som'),DOMS.som.max)+
      bar('Psychological \u2014 mood, anxiety, focus',domScore('psy'),DOMS.psy.max)+
      bar('Urogenital \u2014 dryness, libido, bladder',domScore('uro'),DOMS.uro.max);
    var sh='';r.steps.forEach(function(s,i){var link=s[2]?' <a href="'+s[2]+'">Read more \u2192</a>':'';sh+='<li><span class="sn">'+(i+1)+'</span><span><b>'+s[0]+'.</b> '+s[1]+link+'</span></li>';});
    document.getElementById('rSteps').innerHTML=sh;
    document.getElementById('assess').style.display='none';
    var res=document.getElementById('result');res.classList.add('show');
    if(res.scrollIntoView){res.scrollIntoView({behavior:'smooth',block:'start'});}
  }
  document.getElementById('retake').addEventListener('click',function(){
    document.getElementById('result').classList.remove('show');
    document.getElementById('assess').style.display='';
    // full reset: answers, symptoms, radios, slider
    state.horm=null;state.last=null;state.cycle=null;
    SYM.forEach(function(s){state.sym[s.id]=0;});
    document.querySelectorAll('#symwrap .symrow').forEach(function(row){
      row.querySelectorAll('.sbtn').forEach(function(b,i){b.classList.toggle('on',i===0);});
    });
    document.querySelectorAll('.opts input').forEach(function(r){r.checked=false;});
    document.querySelectorAll('.opt').forEach(function(o){o.classList.remove('sel');});
    state.age=47;age.value=47;ageOut.textContent='47';
    cur=0;show();
    if(document.getElementById('assess').scrollIntoView){document.getElementById('assess').scrollIntoView({behavior:'smooth',block:'start'});}
  });

  document.getElementById('printBtn').addEventListener('click',function(){window.print();});

  show();
})();

/* Deliver the stage guide PDF when the Menopause Tool email form is submitted */
(function(){var f=document.querySelector('#menopause-email form')||document.querySelector('#ranges-email form');if(f){f.addEventListener('submit',function(){window.open('https://cdn.jsdelivr.net/gh/mingas/hb-menopause@main/Menopause-Stage-Guide-and-Symptom-Tracker.pdf','_blank');});}})();
/* Re-label the inherited email section for the women's tool */
(function(){
  function fix(){
    var sec=document.getElementById('ranges-email')||document.getElementById('menopause-email');
    if(!sec)return;
    var h=sec.querySelector('h1,h2,h3');
    if(h)h.textContent='Email me my stage guide + a symptom tracker';
    var em=sec.querySelector('input[type=email],input.w-input');
    if(em&&!em.getAttribute('placeholder'))em.setAttribute('placeholder','you@email.com');
    var b=sec.querySelector('input[type=submit]');
    if(b)b.value='Send it';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();
