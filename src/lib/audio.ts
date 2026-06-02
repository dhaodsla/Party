let audioCtx: AudioContext | null = null;
let bgmOscillator: OscillatorNode | null = null;
let bgmGainNode: GainNode | null = null;
let bgmLfo: OscillatorNode | null = null;

export function initAudio() {
  if (typeof window === 'undefined') return;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

export function playBeep(isMuted: boolean = false) {
  if (isMuted) return;
  initAudio();
  if (!audioCtx) return;
  
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.type = 'sine';
  oscillator.frequency.value = 800; // High pitch, slightly electronic
  
  gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.05);
}

export function startBGM(isMuted: boolean = false) {
  if (isMuted) return;
  initAudio();
  if (!audioCtx) return;

  if (bgmOscillator) stopBGM(0);

  // Deep bass drone for grandeur and tension
  bgmOscillator = audioCtx.createOscillator();
  bgmOscillator.type = 'sawtooth';
  bgmOscillator.frequency.value = 43.65; // Approx F1

  bgmGainNode = audioCtx.createGain();
  bgmGainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  bgmGainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 2); // gradual swell in

  // Low pass filter to make it sound dark and moody
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 120;
  
  // Pulse LFO (simulating a heartbeat/pulse)
  bgmLfo = audioCtx.createOscillator();
  bgmLfo.type = 'sine';
  bgmLfo.frequency.value = 1.3; // Approx 78 BPM, dramatic and steady
  
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 80; // Filter frequency modulation depth
  
  bgmLfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);

  bgmOscillator.connect(filter);
  filter.connect(bgmGainNode);
  bgmGainNode.connect(audioCtx.destination);

  bgmOscillator.start();
  bgmLfo.start();
}

export function stopBGM(fadeTime = 1.5) {
  if (!audioCtx || !bgmGainNode || !bgmOscillator) return;
  
  try {
    bgmGainNode.gain.cancelScheduledValues(audioCtx.currentTime);
    bgmGainNode.gain.setValueAtTime(bgmGainNode.gain.value, audioCtx.currentTime);
    bgmGainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + fadeTime);
    
    const osc = bgmOscillator;
    const lfo = bgmLfo;
    setTimeout(() => {
      try {
        osc.stop();
        if (lfo) lfo.stop();
      } catch(e) {}
    }, fadeTime * 1000);
  } catch(e) {}
  
  bgmOscillator = null;
  bgmLfo = null;
  bgmGainNode = null;
}

export function playApprove(isMuted: boolean = false) {
  if (isMuted) return;
  initAudio();
  if (!audioCtx) return;
  
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  // Bright synth chord for approval
  osc1.type = 'square';
  osc2.type = 'square';
  
  osc1.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
  osc1.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1); // A5
  
  osc2.frequency.setValueAtTime(554.37, audioCtx.currentTime); // C#5
  osc2.frequency.setValueAtTime(1108.73, audioCtx.currentTime + 0.1); // C#6
  
  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
  
  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc1.start();
  osc2.start();
  osc1.stop(audioCtx.currentTime + 1);
  osc2.stop(audioCtx.currentTime + 1);
}
