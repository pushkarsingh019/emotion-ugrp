/******************************* 
 * Preliminary_Experiment *
 *******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'preliminary_experiment';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(self_other_instructionRoutineBegin());
flowScheduler.add(self_other_instructionRoutineEachFrame());
flowScheduler.add(self_other_instructionRoutineEnd());
flowScheduler.add(self_other_infoRoutineBegin());
flowScheduler.add(self_other_infoRoutineEachFrame());
flowScheduler.add(self_other_infoRoutineEnd());
flowScheduler.add(self_other_startingRoutineBegin());
flowScheduler.add(self_other_startingRoutineEachFrame());
flowScheduler.add(self_other_startingRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(free_view_instructionRoutineBegin());
flowScheduler.add(free_view_instructionRoutineEachFrame());
flowScheduler.add(free_view_instructionRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(block1_startRoutineBegin());
flowScheduler.add(block1_startRoutineEachFrame());
flowScheduler.add(block1_startRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);


flowScheduler.add(thank_youRoutineBegin());
flowScheduler.add(thank_youRoutineEachFrame());
flowScheduler.add(thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'image_paths.csv', 'path': 'image_paths.csv'},
    {'name': 'images/1022.jpg', 'path': 'images/1022.jpg'},
    {'name': 'images/1026.jpg', 'path': 'images/1026.jpg'},
    {'name': 'images/1080.jpg', 'path': 'images/1080.jpg'},
    {'name': 'images/1101.jpg', 'path': 'images/1101.jpg'},
    {'name': 'images/1114.jpg', 'path': 'images/1114.jpg'},
    {'name': 'images/1271.jpg', 'path': 'images/1271.jpg'},
    {'name': 'images/1302.jpg', 'path': 'images/1302.jpg'},
    {'name': 'images/1303.jpg', 'path': 'images/1303.jpg'},
    {'name': 'images/1310.jpg', 'path': 'images/1310.jpg'},
    {'name': 'images/1321.jpg', 'path': 'images/1321.jpg'},
    {'name': 'images/1333.jpg', 'path': 'images/1333.jpg'},
    {'name': 'images/1450.jpg', 'path': 'images/1450.jpg'},
    {'name': 'images/1670.jpg', 'path': 'images/1670.jpg'},
    {'name': 'images/1726.jpg', 'path': 'images/1726.jpg'},
    {'name': 'images/1812.jpg', 'path': 'images/1812.jpg'},
    {'name': 'images/1820.jpg', 'path': 'images/1820.jpg'},
    {'name': 'images/1931.jpg', 'path': 'images/1931.jpg'},
    {'name': 'images/2045.jpg', 'path': 'images/2045.jpg'},
    {'name': 'images/2057.jpg', 'path': 'images/2057.jpg'},
    {'name': 'images/2058.jpg', 'path': 'images/2058.jpg'},
    {'name': 'images/2070.jpg', 'path': 'images/2070.jpg'},
    {'name': 'images/2071.jpg', 'path': 'images/2071.jpg'},
    {'name': 'images/2102.jpg', 'path': 'images/2102.jpg'},
    {'name': 'images/2104.jpg', 'path': 'images/2104.jpg'},
    {'name': 'images/2120.jpg', 'path': 'images/2120.jpg'},
    {'name': 'images/2153.jpg', 'path': 'images/2153.jpg'},
    {'name': 'images/2190.jpg', 'path': 'images/2190.jpg'},
    {'name': 'images/2200.jpg', 'path': 'images/2200.jpg'},
    {'name': 'images/2205.jpg', 'path': 'images/2205.jpg'},
    {'name': 'images/2215.jpg', 'path': 'images/2215.jpg'},
    {'name': 'images/2221.jpg', 'path': 'images/2221.jpg'},
    {'name': 'images/2235.jpg', 'path': 'images/2235.jpg'},
    {'name': 'images/2270.jpg', 'path': 'images/2270.jpg'},
    {'name': 'images/2273.jpg', 'path': 'images/2273.jpg'},
    {'name': 'images/2312.jpg', 'path': 'images/2312.jpg'},
    {'name': 'images/2320.jpg', 'path': 'images/2320.jpg'},
    {'name': 'images/2352.1.jpg', 'path': 'images/2352.1.jpg'},
    {'name': 'images/2375.1.jpg', 'path': 'images/2375.1.jpg'},
    {'name': 'images/2377.jpg', 'path': 'images/2377.jpg'},
    {'name': 'images/2383.jpg', 'path': 'images/2383.jpg'},
    {'name': 'images/2396.jpg', 'path': 'images/2396.jpg'},
    {'name': 'images/2397.jpg', 'path': 'images/2397.jpg'},
    {'name': 'images/2411.jpg', 'path': 'images/2411.jpg'},
    {'name': 'images/2440.jpg', 'path': 'images/2440.jpg'},
    {'name': 'images/2458.jpg', 'path': 'images/2458.jpg'},
    {'name': 'images/2489.jpg', 'path': 'images/2489.jpg'},
    {'name': 'images/2491.jpg', 'path': 'images/2491.jpg'},
    {'name': 'images/2493.jpg', 'path': 'images/2493.jpg'},
    {'name': 'images/2495.jpg', 'path': 'images/2495.jpg'},
    {'name': 'images/2499.jpg', 'path': 'images/2499.jpg'},
    {'name': 'images/2506.jpg', 'path': 'images/2506.jpg'},
    {'name': 'images/2512.jpg', 'path': 'images/2512.jpg'},
    {'name': 'images/2513.jpg', 'path': 'images/2513.jpg'},
    {'name': 'images/2516.jpg', 'path': 'images/2516.jpg'},
    {'name': 'images/2518.jpg', 'path': 'images/2518.jpg'},
    {'name': 'images/2530.jpg', 'path': 'images/2530.jpg'},
    {'name': 'images/2560.jpg', 'path': 'images/2560.jpg'},
    {'name': 'images/2570.jpg', 'path': 'images/2570.jpg'},
    {'name': 'images/2580.jpg', 'path': 'images/2580.jpg'},
    {'name': 'images/2593.jpg', 'path': 'images/2593.jpg'},
    {'name': 'images/2620.jpg', 'path': 'images/2620.jpg'},
    {'name': 'images/2695.jpg', 'path': 'images/2695.jpg'},
    {'name': 'images/2720.jpg', 'path': 'images/2720.jpg'},
    {'name': 'images/2745.1.jpg', 'path': 'images/2745.1.jpg'},
    {'name': 'images/2800.jpg', 'path': 'images/2800.jpg'},
    {'name': 'images/2840.jpg', 'path': 'images/2840.jpg'},
    {'name': 'images/2850.jpg', 'path': 'images/2850.jpg'},
    {'name': 'images/2870.jpg', 'path': 'images/2870.jpg'},
    {'name': 'images/2890.jpg', 'path': 'images/2890.jpg'},
    {'name': 'images/2900.2.jpg', 'path': 'images/2900.2.jpg'},
    {'name': 'images/2980.jpg', 'path': 'images/2980.jpg'},
    {'name': 'images/3010.jpg', 'path': 'images/3010.jpg'},
    {'name': 'images/3017.jpg', 'path': 'images/3017.jpg'},
    {'name': 'images/3061.jpg', 'path': 'images/3061.jpg'},
    {'name': 'images/3170.jpg', 'path': 'images/3170.jpg'},
    {'name': 'images/3211.jpg', 'path': 'images/3211.jpg'},
    {'name': 'images/3301.jpg', 'path': 'images/3301.jpg'},
    {'name': 'images/3302.jpg', 'path': 'images/3302.jpg'},
    {'name': 'images/3360.jpg', 'path': 'images/3360.jpg'},
    {'name': 'images/4007.jpg', 'path': 'images/4007.jpg'},
    {'name': 'images/4008.jpg', 'path': 'images/4008.jpg'},
    {'name': 'images/4085.jpg', 'path': 'images/4085.jpg'},
    {'name': 'images/4142.jpg', 'path': 'images/4142.jpg'},
    {'name': 'images/4180.jpg', 'path': 'images/4180.jpg'},
    {'name': 'images/4210.jpg', 'path': 'images/4210.jpg'},
    {'name': 'images/4220.jpg', 'path': 'images/4220.jpg'},
    {'name': 'images/4232.jpg', 'path': 'images/4232.jpg'},
    {'name': 'images/4300.jpg', 'path': 'images/4300.jpg'},
    {'name': 'images/4302.jpg', 'path': 'images/4302.jpg'},
    {'name': 'images/4490.jpg', 'path': 'images/4490.jpg'},
    {'name': 'images/4561.jpg', 'path': 'images/4561.jpg'},
    {'name': 'images/4598.jpg', 'path': 'images/4598.jpg'},
    {'name': 'images/4601.jpg', 'path': 'images/4601.jpg'},
    {'name': 'images/4604.jpg', 'path': 'images/4604.jpg'},
    {'name': 'images/4622.jpg', 'path': 'images/4622.jpg'},
    {'name': 'images/4631.jpg', 'path': 'images/4631.jpg'},
    {'name': 'images/4647.jpg', 'path': 'images/4647.jpg'},
    {'name': 'images/4649.jpg', 'path': 'images/4649.jpg'},
    {'name': 'images/4651.jpg', 'path': 'images/4651.jpg'},
    {'name': 'images/4664.1.jpg', 'path': 'images/4664.1.jpg'},
    {'name': 'images/4666.jpg', 'path': 'images/4666.jpg'},
    {'name': 'images/4668.jpg', 'path': 'images/4668.jpg'},
    {'name': 'images/4669.jpg', 'path': 'images/4669.jpg'},
    {'name': 'images/4672.jpg', 'path': 'images/4672.jpg'},
    {'name': 'images/4683.jpg', 'path': 'images/4683.jpg'},
    {'name': 'images/4692.jpg', 'path': 'images/4692.jpg'},
    {'name': 'images/4693.jpg', 'path': 'images/4693.jpg'},
    {'name': 'images/4697.jpg', 'path': 'images/4697.jpg'},
    {'name': 'images/4698.jpg', 'path': 'images/4698.jpg'},
    {'name': 'images/4770.jpg', 'path': 'images/4770.jpg'},
    {'name': 'images/4800.jpg', 'path': 'images/4800.jpg'},
    {'name': 'images/5875.jpg', 'path': 'images/5875.jpg'},
    {'name': 'images/5920.jpg', 'path': 'images/5920.jpg'},
    {'name': 'images/5950.jpg', 'path': 'images/5950.jpg'},
    {'name': 'images/6230.jpg', 'path': 'images/6230.jpg'},
    {'name': 'images/6350.jpg', 'path': 'images/6350.jpg'},
    {'name': 'images/6550.jpg', 'path': 'images/6550.jpg'},
    {'name': 'images/6900.jpg', 'path': 'images/6900.jpg'},
    {'name': 'images/6910.jpg', 'path': 'images/6910.jpg'},
    {'name': 'images/7004.jpg', 'path': 'images/7004.jpg'},
    {'name': 'images/7006.jpg', 'path': 'images/7006.jpg'},
    {'name': 'images/7010.jpg', 'path': 'images/7010.jpg'},
    {'name': 'images/7014.jpg', 'path': 'images/7014.jpg'},
    {'name': 'images/7016.jpg', 'path': 'images/7016.jpg'},
    {'name': 'images/7019.jpg', 'path': 'images/7019.jpg'},
    {'name': 'images/7020.jpg', 'path': 'images/7020.jpg'},
    {'name': 'images/7025.jpg', 'path': 'images/7025.jpg'},
    {'name': 'images/7030.jpg', 'path': 'images/7030.jpg'},
    {'name': 'images/7031.jpg', 'path': 'images/7031.jpg'},
    {'name': 'images/7032.jpg', 'path': 'images/7032.jpg'},
    {'name': 'images/7034.jpg', 'path': 'images/7034.jpg'},
    {'name': 'images/7036.jpg', 'path': 'images/7036.jpg'},
    {'name': 'images/7040.jpg', 'path': 'images/7040.jpg'},
    {'name': 'images/7041.jpg', 'path': 'images/7041.jpg'},
    {'name': 'images/7050.jpg', 'path': 'images/7050.jpg'},
    {'name': 'images/7052.jpg', 'path': 'images/7052.jpg'},
    {'name': 'images/7057.jpg', 'path': 'images/7057.jpg'},
    {'name': 'images/7060.jpg', 'path': 'images/7060.jpg'},
    {'name': 'images/7100.jpg', 'path': 'images/7100.jpg'},
    {'name': 'images/7130.jpg', 'path': 'images/7130.jpg'},
    {'name': 'images/7140.jpg', 'path': 'images/7140.jpg'},
    {'name': 'images/7150.jpg', 'path': 'images/7150.jpg'},
    {'name': 'images/7185.jpg', 'path': 'images/7185.jpg'},
    {'name': 'images/7187.jpg', 'path': 'images/7187.jpg'},
    {'name': 'images/7217.jpg', 'path': 'images/7217.jpg'},
    {'name': 'images/7234.jpg', 'path': 'images/7234.jpg'},
    {'name': 'images/7235.jpg', 'path': 'images/7235.jpg'},
    {'name': 'images/7300.jpg', 'path': 'images/7300.jpg'},
    {'name': 'images/7360.jpg', 'path': 'images/7360.jpg'},
    {'name': 'images/7361.jpg', 'path': 'images/7361.jpg'},
    {'name': 'images/7365.jpg', 'path': 'images/7365.jpg'},
    {'name': 'images/7450.jpg', 'path': 'images/7450.jpg'},
    {'name': 'images/7499.jpg', 'path': 'images/7499.jpg'},
    {'name': 'images/7509.jpg', 'path': 'images/7509.jpg'},
    {'name': 'images/7513.jpg', 'path': 'images/7513.jpg'},
    {'name': 'images/7640.jpg', 'path': 'images/7640.jpg'},
    {'name': 'images/7705.jpg', 'path': 'images/7705.jpg'},
    {'name': 'images/7710.jpg', 'path': 'images/7710.jpg'},
    {'name': 'images/7950.jpg', 'path': 'images/7950.jpg'},
    {'name': 'images/8001.jpg', 'path': 'images/8001.jpg'},
    {'name': 'images/8065.jpg', 'path': 'images/8065.jpg'},
    {'name': 'images/8160.jpg', 'path': 'images/8160.jpg'},
    {'name': 'images/8178.jpg', 'path': 'images/8178.jpg'},
    {'name': 'images/8179.jpg', 'path': 'images/8179.jpg'},
    {'name': 'images/8191.jpg', 'path': 'images/8191.jpg'},
    {'name': 'images/8192.jpg', 'path': 'images/8192.jpg'},
    {'name': 'images/8206.jpg', 'path': 'images/8206.jpg'},
    {'name': 'images/8251.jpg', 'path': 'images/8251.jpg'},
    {'name': 'images/8260.jpg', 'path': 'images/8260.jpg'},
    {'name': 'images/8341.jpg', 'path': 'images/8341.jpg'},
    {'name': 'images/8475.jpg', 'path': 'images/8475.jpg'},
    {'name': 'images/9156.jpg', 'path': 'images/9156.jpg'},
    {'name': 'images/9210.jpg', 'path': 'images/9210.jpg'},
    {'name': 'images/9260.jpg', 'path': 'images/9260.jpg'},
    {'name': 'images/9295.jpg', 'path': 'images/9295.jpg'},
    {'name': 'images/9332.jpg', 'path': 'images/9332.jpg'},
    {'name': 'images/9582.jpg', 'path': 'images/9582.jpg'},
    {'name': 'images/9596.jpg', 'path': 'images/9596.jpg'},
    {'name': 'images/9700.jpg', 'path': 'images/9700.jpg'},
    {'name': 'images/9926.jpg', 'path': 'images/9926.jpg'},
    {'name': 'block1_distractors.xlsx', 'path': 'block1_distractors.xlsx'},
    {'name': 'DistAOne/1333.jpg', 'path': 'DistAOne/1333.jpg'},
    {'name': 'DistAOne/2512.jpg', 'path': 'DistAOne/2512.jpg'},
    {'name': 'DistAOne/9210.jpg', 'path': 'DistAOne/9210.jpg'},
    {'name': 'DistAOne/7057.jpg', 'path': 'DistAOne/7057.jpg'},
    {'name': 'DistAOne/7019.jpg', 'path': 'DistAOne/7019.jpg'},
    {'name': 'DistAOne/7016.jpg', 'path': 'DistAOne/7016.jpg'},
    {'name': 'DistAOne/1670.jpg', 'path': 'DistAOne/1670.jpg'},
    {'name': 'DistAOne/7705.jpg', 'path': 'DistAOne/7705.jpg'},
    {'name': 'DistAOne/2495.jpg', 'path': 'DistAOne/2495.jpg'},
    {'name': 'DistAOne/1812.jpg', 'path': 'DistAOne/1812.jpg'},
    {'name': 'DistAOne/7025.jpg', 'path': 'DistAOne/7025.jpg'},
    {'name': 'DistAOne/7041.jpg', 'path': 'DistAOne/7041.jpg'},
    {'name': 'DistAOne/2513.jpg', 'path': 'DistAOne/2513.jpg'},
    {'name': 'DistAOne/7004.jpg', 'path': 'DistAOne/7004.jpg'},
    {'name': 'DistAOne/2215.jpg', 'path': 'DistAOne/2215.jpg'},
    {'name': 'DistAOne/7010.jpg', 'path': 'DistAOne/7010.jpg'},
    {'name': 'DistAOne/5875.jpg', 'path': 'DistAOne/5875.jpg'},
    {'name': 'DistAOne/2506.jpg', 'path': 'DistAOne/2506.jpg'},
    {'name': 'DistAOne/2270.jpg', 'path': 'DistAOne/2270.jpg'},
    {'name': 'DistAOne/2518.jpg', 'path': 'DistAOne/2518.jpg'},
    {'name': 'DistAOne/7100.jpg', 'path': 'DistAOne/7100.jpg'},
    {'name': 'DistAOne/2153.jpg', 'path': 'DistAOne/2153.jpg'},
    {'name': 'DistAOne/2312.jpg', 'path': 'DistAOne/2312.jpg'},
    {'name': 'DistAOne/2396.jpg', 'path': 'DistAOne/2396.jpg'},
    {'name': 'DistAOne/7365.jpg', 'path': 'DistAOne/7365.jpg'},
    {'name': 'DistAOne/2205.jpg', 'path': 'DistAOne/2205.jpg'},
    {'name': 'DistAOne/7950.jpg', 'path': 'DistAOne/7950.jpg'},
    {'name': 'DistAOne/2320.jpg', 'path': 'DistAOne/2320.jpg'},
    {'name': 'DistAOne/2499.jpg', 'path': 'DistAOne/2499.jpg'},
    {'name': 'DistAOne/2397.jpg', 'path': 'DistAOne/2397.jpg'},
    {'name': 'DistAOne/2850.jpg', 'path': 'DistAOne/2850.jpg'},
    {'name': 'DistAOne/7032.jpg', 'path': 'DistAOne/7032.jpg'},
    {'name': 'DistAOne/7140.jpg', 'path': 'DistAOne/7140.jpg'},
    {'name': 'DistAOne/9260.jpg', 'path': 'DistAOne/9260.jpg'},
    {'name': 'DistAOne/2980.jpg', 'path': 'DistAOne/2980.jpg'},
    {'name': 'DistAOne/7710.jpg', 'path': 'DistAOne/7710.jpg'},
    {'name': 'DistAOne/2530.jpg', 'path': 'DistAOne/2530.jpg'},
    {'name': 'DistAOne/2900.2.jpg', 'path': 'DistAOne/2900.2.jpg'},
    {'name': 'DistAOne/4622.jpg', 'path': 'DistAOne/4622.jpg'},
    {'name': 'DistAOne/2200.jpg', 'path': 'DistAOne/2200.jpg'},
    {'name': 'DistAOne/2745.1.jpg', 'path': 'DistAOne/2745.1.jpg'},
    {'name': 'DistAOne/2104.jpg', 'path': 'DistAOne/2104.jpg'},
    {'name': 'DistAOne/7006.jpg', 'path': 'DistAOne/7006.jpg'},
    {'name': 'DistAOne/7014.jpg', 'path': 'DistAOne/7014.jpg'},
    {'name': 'DistAOne/2720.jpg', 'path': 'DistAOne/2720.jpg'},
    {'name': 'DistATwo/8178.jpg', 'path': 'DistATwo/8178.jpg'},
    {'name': 'DistATwo/4664.1.jpg', 'path': 'DistATwo/4664.1.jpg'},
    {'name': 'DistATwo/9295.jpg', 'path': 'DistATwo/9295.jpg'},
    {'name': 'DistATwo/1310.jpg', 'path': 'DistATwo/1310.jpg'},
    {'name': 'DistATwo/3211.jpg', 'path': 'DistATwo/3211.jpg'},
    {'name': 'DistATwo/4142.jpg', 'path': 'DistATwo/4142.jpg'},
    {'name': 'DistATwo/4770.jpg', 'path': 'DistATwo/4770.jpg'},
    {'name': 'DistATwo/1026.jpg', 'path': 'DistATwo/1026.jpg'},
    {'name': 'DistATwo/3170.jpg', 'path': 'DistATwo/3170.jpg'},
    {'name': 'DistATwo/2058.jpg', 'path': 'DistATwo/2058.jpg'},
    {'name': 'DistATwo/6900.jpg', 'path': 'DistATwo/6900.jpg'},
    {'name': 'DistATwo/4085.jpg', 'path': 'DistATwo/4085.jpg'},
    {'name': 'DistATwo/4668.jpg', 'path': 'DistATwo/4668.jpg'},
    {'name': 'DistATwo/9926.jpg', 'path': 'DistATwo/9926.jpg'},
    {'name': 'DistATwo/9156.jpg', 'path': 'DistATwo/9156.jpg'},
    {'name': 'DistATwo/7360.jpg', 'path': 'DistATwo/7360.jpg'},
    {'name': 'DistATwo/8001.jpg', 'path': 'DistATwo/8001.jpg'},
    {'name': 'DistATwo/4210.jpg', 'path': 'DistATwo/4210.jpg'},
    {'name': 'DistATwo/4698.jpg', 'path': 'DistATwo/4698.jpg'},
    {'name': 'DistATwo/1931.jpg', 'path': 'DistATwo/1931.jpg'},
    {'name': 'DistATwo/4666.jpg', 'path': 'DistATwo/4666.jpg'},
    {'name': 'DistATwo/1820.jpg', 'path': 'DistATwo/1820.jpg'},
    {'name': 'DistATwo/3302.jpg', 'path': 'DistATwo/3302.jpg'},
    {'name': 'DistATwo/1101.jpg', 'path': 'DistATwo/1101.jpg'},
    {'name': 'DistATwo/3010.jpg', 'path': 'DistATwo/3010.jpg'},
    {'name': 'DistATwo/2458.jpg', 'path': 'DistATwo/2458.jpg'},
    {'name': 'DistATwo/6910.jpg', 'path': 'DistATwo/6910.jpg'},
    {'name': 'DistATwo/2800.jpg', 'path': 'DistATwo/2800.jpg'},
    {'name': 'DistATwo/4697.jpg', 'path': 'DistATwo/4697.jpg'},
    {'name': 'DistATwo/5950.jpg', 'path': 'DistATwo/5950.jpg'},
    {'name': 'DistATwo/4220.jpg', 'path': 'DistATwo/4220.jpg'},
    {'name': 'DistATwo/4647.jpg', 'path': 'DistATwo/4647.jpg'},
    {'name': 'DistATwo/8475.jpg', 'path': 'DistATwo/8475.jpg'},
    {'name': 'DistATwo/4649.jpg', 'path': 'DistATwo/4649.jpg'},
    {'name': 'DistATwo/1321.jpg', 'path': 'DistATwo/1321.jpg'},
    {'name': 'DistATwo/3061.jpg', 'path': 'DistATwo/3061.jpg'},
    {'name': 'DistATwo/4490.jpg', 'path': 'DistATwo/4490.jpg'},
    {'name': 'DistATwo/6350.jpg', 'path': 'DistATwo/6350.jpg'},
    {'name': 'DistATwo/7361.jpg', 'path': 'DistATwo/7361.jpg'},
    {'name': 'DistATwo/4693.jpg', 'path': 'DistATwo/4693.jpg'},
    {'name': 'DistATwo/1303.jpg', 'path': 'DistATwo/1303.jpg'},
    {'name': 'DistATwo/8191.jpg', 'path': 'DistATwo/8191.jpg'},
    {'name': 'DistATwo/8160.jpg', 'path': 'DistATwo/8160.jpg'},
    {'name': 'DistATwo/1302.jpg', 'path': 'DistATwo/1302.jpg'},
    {'name': 'DistATwo/4672.jpg', 'path': 'DistATwo/4672.jpg'},
    {'name': 'block2_distractors.xlsx', 'path': 'block2_distractors.xlsx'},
    {'name': 'DistATwo/1022.jpg', 'path': 'DistATwo/1022.jpg'},
    {'name': 'DistATwo/8065.jpg', 'path': 'DistATwo/8065.jpg'},
    {'name': 'DistATwo/8341.jpg', 'path': 'DistATwo/8341.jpg'},
    {'name': 'DistATwo/7499.jpg', 'path': 'DistATwo/7499.jpg'},
    {'name': 'DistATwo/2057.jpg', 'path': 'DistATwo/2057.jpg'},
    {'name': 'DistATwo/4302.jpg', 'path': 'DistATwo/4302.jpg'},
    {'name': 'DistATwo/4008.jpg', 'path': 'DistATwo/4008.jpg'},
    {'name': 'DistATwo/4598.jpg', 'path': 'DistATwo/4598.jpg'},
    {'name': 'DistATwo/4692.jpg', 'path': 'DistATwo/4692.jpg'},
    {'name': 'DistATwo/2045.jpg', 'path': 'DistATwo/2045.jpg'},
    {'name': 'DistATwo/3017.jpg', 'path': 'DistATwo/3017.jpg'},
    {'name': 'DistATwo/2071.jpg', 'path': 'DistATwo/2071.jpg'},
    {'name': 'DistATwo/8206.jpg', 'path': 'DistATwo/8206.jpg'},
    {'name': 'DistATwo/9332.jpg', 'path': 'DistATwo/9332.jpg'},
    {'name': 'DistATwo/4300.jpg', 'path': 'DistATwo/4300.jpg'},
    {'name': 'DistATwo/4683.jpg', 'path': 'DistATwo/4683.jpg'},
    {'name': 'DistATwo/4669.jpg', 'path': 'DistATwo/4669.jpg'},
    {'name': 'DistATwo/2375.1.jpg', 'path': 'DistATwo/2375.1.jpg'},
    {'name': 'DistATwo/4232.jpg', 'path': 'DistATwo/4232.jpg'},
    {'name': 'DistATwo/4800.jpg', 'path': 'DistATwo/4800.jpg'},
    {'name': 'DistATwo/2120.jpg', 'path': 'DistATwo/2120.jpg'},
    {'name': 'DistATwo/1271.jpg', 'path': 'DistATwo/1271.jpg'},
    {'name': 'DistATwo/3360.jpg', 'path': 'DistATwo/3360.jpg'},
    {'name': 'DistATwo/4007.jpg', 'path': 'DistATwo/4007.jpg'},
    {'name': 'DistATwo/8192.jpg', 'path': 'DistATwo/8192.jpg'},
    {'name': 'DistATwo/4601.jpg', 'path': 'DistATwo/4601.jpg'},
    {'name': 'DistATwo/6550.jpg', 'path': 'DistATwo/6550.jpg'},
    {'name': 'DistATwo/7640.jpg', 'path': 'DistATwo/7640.jpg'},
    {'name': 'DistATwo/3301.jpg', 'path': 'DistATwo/3301.jpg'},
    {'name': 'DistATwo/4180.jpg', 'path': 'DistATwo/4180.jpg'},
    {'name': 'DistATwo/9596.jpg', 'path': 'DistATwo/9596.jpg'},
    {'name': 'DistATwo/7450.jpg', 'path': 'DistATwo/7450.jpg'},
    {'name': 'DistATwo/2352.1.jpg', 'path': 'DistATwo/2352.1.jpg'},
    {'name': 'DistATwo/8260.jpg', 'path': 'DistATwo/8260.jpg'},
    {'name': 'DistATwo/4651.jpg', 'path': 'DistATwo/4651.jpg'},
    {'name': 'DistATwo/1114.jpg', 'path': 'DistATwo/1114.jpg'},
    {'name': 'DistATwo/9582.jpg', 'path': 'DistATwo/9582.jpg'},
    {'name': 'DistATwo/5920.jpg', 'path': 'DistATwo/5920.jpg'},
    {'name': 'DistATwo/1726.jpg', 'path': 'DistATwo/1726.jpg'},
    {'name': 'DistATwo/4631.jpg', 'path': 'DistATwo/4631.jpg'},
    {'name': 'DistATwo/6230.jpg', 'path': 'DistATwo/6230.jpg'},
    {'name': 'DistATwo/4604.jpg', 'path': 'DistATwo/4604.jpg'},
    {'name': 'DistATwo/8179.jpg', 'path': 'DistATwo/8179.jpg'},
    {'name': 'DistATwo/1080.jpg', 'path': 'DistATwo/1080.jpg'},
    {'name': 'DistATwo/8251.jpg', 'path': 'DistATwo/8251.jpg'},
    {'name': 'DistAOne/4561.jpg', 'path': 'DistAOne/4561.jpg'},
    {'name': 'DistAOne/7187.jpg', 'path': 'DistAOne/7187.jpg'},
    {'name': 'DistAOne/7509.jpg', 'path': 'DistAOne/7509.jpg'},
    {'name': 'DistAOne/2489.jpg', 'path': 'DistAOne/2489.jpg'},
    {'name': 'DistAOne/7020.jpg', 'path': 'DistAOne/7020.jpg'},
    {'name': 'DistAOne/2221.jpg', 'path': 'DistAOne/2221.jpg'},
    {'name': 'DistAOne/2491.jpg', 'path': 'DistAOne/2491.jpg'},
    {'name': 'DistAOne/2695.jpg', 'path': 'DistAOne/2695.jpg'},
    {'name': 'DistAOne/7060.jpg', 'path': 'DistAOne/7060.jpg'},
    {'name': 'DistAOne/2570.jpg', 'path': 'DistAOne/2570.jpg'},
    {'name': 'DistAOne/7235.jpg', 'path': 'DistAOne/7235.jpg'},
    {'name': 'DistAOne/7150.jpg', 'path': 'DistAOne/7150.jpg'},
    {'name': 'DistAOne/7300.jpg', 'path': 'DistAOne/7300.jpg'},
    {'name': 'DistAOne/7234.jpg', 'path': 'DistAOne/7234.jpg'},
    {'name': 'DistAOne/7031.jpg', 'path': 'DistAOne/7031.jpg'},
    {'name': 'DistAOne/2840.jpg', 'path': 'DistAOne/2840.jpg'},
    {'name': 'DistAOne/2235.jpg', 'path': 'DistAOne/2235.jpg'},
    {'name': 'DistAOne/1450.jpg', 'path': 'DistAOne/1450.jpg'},
    {'name': 'DistAOne/2493.jpg', 'path': 'DistAOne/2493.jpg'},
    {'name': 'DistAOne/2870.jpg', 'path': 'DistAOne/2870.jpg'},
    {'name': 'DistAOne/2070.jpg', 'path': 'DistAOne/2070.jpg'},
    {'name': 'DistAOne/2560.jpg', 'path': 'DistAOne/2560.jpg'},
    {'name': 'DistAOne/7185.jpg', 'path': 'DistAOne/7185.jpg'},
    {'name': 'DistAOne/2440.jpg', 'path': 'DistAOne/2440.jpg'},
    {'name': 'DistAOne/2411.jpg', 'path': 'DistAOne/2411.jpg'},
    {'name': 'DistAOne/2190.jpg', 'path': 'DistAOne/2190.jpg'},
    {'name': 'DistAOne/2377.jpg', 'path': 'DistAOne/2377.jpg'},
    {'name': 'DistAOne/7217.jpg', 'path': 'DistAOne/7217.jpg'},
    {'name': 'DistAOne/7130.jpg', 'path': 'DistAOne/7130.jpg'},
    {'name': 'DistAOne/7030.jpg', 'path': 'DistAOne/7030.jpg'},
    {'name': 'DistAOne/9700.jpg', 'path': 'DistAOne/9700.jpg'},
    {'name': 'DistAOne/2102.jpg', 'path': 'DistAOne/2102.jpg'},
    {'name': 'DistAOne/2620.jpg', 'path': 'DistAOne/2620.jpg'},
    {'name': 'DistAOne/7513.jpg', 'path': 'DistAOne/7513.jpg'},
    {'name': 'DistAOne/7040.jpg', 'path': 'DistAOne/7040.jpg'},
    {'name': 'DistAOne/7050.jpg', 'path': 'DistAOne/7050.jpg'},
    {'name': 'DistAOne/2580.jpg', 'path': 'DistAOne/2580.jpg'},
    {'name': 'DistAOne/2890.jpg', 'path': 'DistAOne/2890.jpg'},
    {'name': 'DistAOne/7036.jpg', 'path': 'DistAOne/7036.jpg'},
    {'name': 'DistAOne/7052.jpg', 'path': 'DistAOne/7052.jpg'},
    {'name': 'DistAOne/2383.jpg', 'path': 'DistAOne/2383.jpg'},
    {'name': 'DistAOne/2273.jpg', 'path': 'DistAOne/2273.jpg'},
    {'name': 'DistAOne/7034.jpg', 'path': 'DistAOne/7034.jpg'},
    {'name': 'DistAOne/2593.jpg', 'path': 'DistAOne/2593.jpg'},
    {'name': 'DistAOne/2516.jpg', 'path': 'DistAOne/2516.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var text_norm;
var key_instruct;
var self_other_instructionClock;
var text_norm_2;
var key_instruct_2;
var self_other_infoClock;
var self_shape;
var other;
var label_self;
var label_other;
var text;
var key_resp;
var self_other_startingClock;
var text_norm_3;
var key_instruct_3;
var trialClock;
var label_text;
var orientation;
var correct;
var fixation;
var label;
var key_resp_2;
var polygon;
var feedbackClock;
var feedback_text;
var text_2;
var free_view_instructionClock;
var text_norm_6;
var key_instruct_6;
var free_viewingClock;
var image;
var key_resp_3;
var block1_startClock;
var text_norm_4;
var key_instruct_4;
var block_1Clock;
var orientation_block_one;
var label_block_one;
var correct_resp_blockOne;
var block1_fixation;
var block1_ploygon;
var distractor_block1;
var blockone_label;
var key_resp_4;
var block_2Clock;
var orientation_block_two;
var label_block_two;
var correct_resp_blockTwo;
var x_position;
var block2_fixation;
var block2_polygon;
var distractor_block2;
var blocktwo_label;
var key_resp_5;
var text_3;
var thank_youClock;
var text_norm_7;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text_norm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm',
    text: "Welcome to the experiment.\n\npress 'spacebar' to continue.",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Initialize components for Routine "self_other_instruction"
  self_other_instructionClock = new util.Clock();
  text_norm_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm_2',
    text: "In the next slide, you will be shown two shapes. Each shape will have a label. \n\nIn the coming task you would have to press 'y' if the image - shape combination is right and 'n' if the image does not match the label.\n\npress 'spacebar' to continue\n",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align_2
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Initialize components for Routine "self_other_info"
  self_other_infoClock = new util.Clock();
  self_shape = new visual.Rect ({
    win: psychoJS.window, name: 'self_shape', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.2), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  other = new visual.Rect ({
    win: psychoJS.window, name: 'other', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 45.0, pos: [0.2, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  label_self = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_self',
    text: 'You',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  label_other = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_other',
    text: 'other',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "press 'spacebar' to contiue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "self_other_starting"
  self_other_startingClock = new util.Clock();
  text_norm_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm_3',
    text: "When you shape and label match, press 'y', and when they dont match press 'n'\n\npress 'spacebar' to continue\n",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align_3
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  label_text = "";
  orientation = 0;
  correct = 0;
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.09, 0.09],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  label = new visual.TextStim({
    win: psychoJS.window,
    name: 'label',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 1.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  feedback_text = "";
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "free_view_instruction"
  free_view_instructionClock = new util.Clock();
  text_norm_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm_6',
    text: 'Now you will see a series of images. press any key to move to the next one.\n\nPress the spacebar to continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align_6
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Initialize components for Routine "free_viewing"
  free_viewingClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block1_start"
  block1_startClock = new util.Clock();
  text_norm_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm_4',
    text: "The experiment is about to start. If the shape and the label match, press 'y', if no, press 'n'. try to answer as fast as you can with accuracy.\n\npress 'spacebar' to continue\n",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instruct_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from text_align_4
  // Code component set to Both
  text_norm.setAlignHoriz('left')
  // Initialize components for Routine "block_1"
  block_1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  orientation_block_one = "";
  label_block_one = "";
  correct_resp_blockOne = "";
  
  block1_fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'block1_fixation', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 45.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  block1_ploygon = new visual.Rect ({
    win: psychoJS.window, name: 'block1_ploygon', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 1.0, pos: [0, 0.3],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  distractor_block1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_block1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.08)], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  blockone_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockone_label',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.34)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_2"
  block_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  orientation_block_two = "";
  label_block_two = "";
  correct_resp_blockTwo = "";
  x_position = 0.0;
  
  block2_fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'block2_fixation', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 45.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  block2_polygon = new visual.Rect ({
    win: psychoJS.window, name: 'block2_polygon', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 1.0, pos: [0, 0.3],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  distractor_block2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_block2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  blocktwo_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'blocktwo_label',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.34)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Any text\n\nincluding line breaks',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "thank_you"
  thank_youClock = new util.Clock();
  text_norm_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_norm_7',
    text: 'Thank you for participating :))',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_instruct_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_instruct.keys = undefined;
    key_instruct.rt = undefined;
    _key_instruct_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text_norm);
    InstructionsComponents.push(key_instruct);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm* updates
    if (t >= 0.0 && text_norm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm.tStart = t;  // (not accounting for frame time here)
      text_norm.frameNStart = frameN;  // exact frame index
      
      text_norm.setAutoDraw(true);
    }
    
    
    // *key_instruct* updates
    if (t >= 0.0 && key_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct.tStart = t;  // (not accounting for frame time here)
      key_instruct.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct.clearEvents(); });
    }
    
    if (key_instruct.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_allKeys = _key_instruct_allKeys.concat(theseKeys);
      if (_key_instruct_allKeys.length > 0) {
        key_instruct.keys = _key_instruct_allKeys[0].name;  // just the first key pressed
        key_instruct.rt = _key_instruct_allKeys[0].rt;
        key_instruct.duration = _key_instruct_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct.corr, level);
    }
    psychoJS.experiment.addData('key_instruct.keys', key_instruct.keys);
    if (typeof key_instruct.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct.rt', key_instruct.rt);
        psychoJS.experiment.addData('key_instruct.duration', key_instruct.duration);
        routineTimer.reset();
        }
    
    key_instruct.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_instruct_2_allKeys;
var self_other_instructionComponents;
function self_other_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'self_other_instruction' ---
    t = 0;
    self_other_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_instruct_2.keys = undefined;
    key_instruct_2.rt = undefined;
    _key_instruct_2_allKeys = [];
    // keep track of which components have finished
    self_other_instructionComponents = [];
    self_other_instructionComponents.push(text_norm_2);
    self_other_instructionComponents.push(key_instruct_2);
    
    for (const thisComponent of self_other_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function self_other_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'self_other_instruction' ---
    // get current time
    t = self_other_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm_2* updates
    if (t >= 0.0 && text_norm_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm_2.tStart = t;  // (not accounting for frame time here)
      text_norm_2.frameNStart = frameN;  // exact frame index
      
      text_norm_2.setAutoDraw(true);
    }
    
    
    // *key_instruct_2* updates
    if (t >= 0.0 && key_instruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct_2.tStart = t;  // (not accounting for frame time here)
      key_instruct_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_2.clearEvents(); });
    }
    
    if (key_instruct_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_2_allKeys = _key_instruct_2_allKeys.concat(theseKeys);
      if (_key_instruct_2_allKeys.length > 0) {
        key_instruct_2.keys = _key_instruct_2_allKeys[0].name;  // just the first key pressed
        key_instruct_2.rt = _key_instruct_2_allKeys[0].rt;
        key_instruct_2.duration = _key_instruct_2_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of self_other_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function self_other_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'self_other_instruction' ---
    for (const thisComponent of self_other_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct_2.corr, level);
    }
    psychoJS.experiment.addData('key_instruct_2.keys', key_instruct_2.keys);
    if (typeof key_instruct_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct_2.rt', key_instruct_2.rt);
        psychoJS.experiment.addData('key_instruct_2.duration', key_instruct_2.duration);
        routineTimer.reset();
        }
    
    key_instruct_2.stop();
    // the Routine "self_other_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var self_other_infoComponents;
function self_other_infoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'self_other_info' ---
    t = 0;
    self_other_infoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    self_other_infoComponents = [];
    self_other_infoComponents.push(self_shape);
    self_other_infoComponents.push(other);
    self_other_infoComponents.push(label_self);
    self_other_infoComponents.push(label_other);
    self_other_infoComponents.push(text);
    self_other_infoComponents.push(key_resp);
    
    for (const thisComponent of self_other_infoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function self_other_infoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'self_other_info' ---
    // get current time
    t = self_other_infoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *self_shape* updates
    if (t >= 0.0 && self_shape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_shape.tStart = t;  // (not accounting for frame time here)
      self_shape.frameNStart = frameN;  // exact frame index
      
      self_shape.setAutoDraw(true);
    }
    
    
    // *other* updates
    if (t >= 0.0 && other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      other.tStart = t;  // (not accounting for frame time here)
      other.frameNStart = frameN;  // exact frame index
      
      other.setAutoDraw(true);
    }
    
    
    // *label_self* updates
    if (t >= 0.0 && label_self.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_self.tStart = t;  // (not accounting for frame time here)
      label_self.frameNStart = frameN;  // exact frame index
      
      label_self.setAutoDraw(true);
    }
    
    
    // *label_other* updates
    if (t >= 0.0 && label_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_other.tStart = t;  // (not accounting for frame time here)
      label_other.frameNStart = frameN;  // exact frame index
      
      label_other.setAutoDraw(true);
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
      key_resp.clearEvents();
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of self_other_infoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function self_other_infoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'self_other_info' ---
    for (const thisComponent of self_other_infoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp.stop();
    // the Routine "self_other_info" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_instruct_3_allKeys;
var self_other_startingComponents;
function self_other_startingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'self_other_starting' ---
    t = 0;
    self_other_startingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_instruct_3.keys = undefined;
    key_instruct_3.rt = undefined;
    _key_instruct_3_allKeys = [];
    // keep track of which components have finished
    self_other_startingComponents = [];
    self_other_startingComponents.push(text_norm_3);
    self_other_startingComponents.push(key_instruct_3);
    
    for (const thisComponent of self_other_startingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function self_other_startingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'self_other_starting' ---
    // get current time
    t = self_other_startingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm_3* updates
    if (t >= 0.0 && text_norm_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm_3.tStart = t;  // (not accounting for frame time here)
      text_norm_3.frameNStart = frameN;  // exact frame index
      
      text_norm_3.setAutoDraw(true);
    }
    
    
    // *key_instruct_3* updates
    if (t >= 0.0 && key_instruct_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct_3.tStart = t;  // (not accounting for frame time here)
      key_instruct_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_3.clearEvents(); });
    }
    
    if (key_instruct_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_3_allKeys = _key_instruct_3_allKeys.concat(theseKeys);
      if (_key_instruct_3_allKeys.length > 0) {
        key_instruct_3.keys = _key_instruct_3_allKeys[0].name;  // just the first key pressed
        key_instruct_3.rt = _key_instruct_3_allKeys[0].rt;
        key_instruct_3.duration = _key_instruct_3_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of self_other_startingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function self_other_startingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'self_other_starting' ---
    for (const thisComponent of self_other_startingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct_3.corr, level);
    }
    psychoJS.experiment.addData('key_instruct_3.keys', key_instruct_3.keys);
    if (typeof key_instruct_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct_3.rt', key_instruct_3.rt);
        psychoJS.experiment.addData('key_instruct_3.duration', key_instruct_3.duration);
        routineTimer.reset();
        }
    
    key_instruct_3.stop();
    // the Routine "self_other_starting" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'image_paths.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(free_viewingRoutineBegin(snapshot));
      trials_2LoopScheduler.add(free_viewingRoutineEachFrame());
      trials_2LoopScheduler.add(free_viewingRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'block1_distractors.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(block_1RoutineBegin(snapshot));
      trials_3LoopScheduler.add(block_1RoutineEachFrame());
      trials_3LoopScheduler.add(block_1RoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'block2_distractors.xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(block_2RoutineBegin(snapshot));
      trials_4LoopScheduler.add(block_2RoutineEachFrame());
      trials_4LoopScheduler.add(block_2RoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var value;
var c_resp;
var _key_resp_2_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    value = Math.random();
    if ((value < (1 / 4))) {
        label_text = "self";
        orientation = 0;
        c_resp = "y";
    } else {
        if ((((1 / 4) < value) && (value < (2 / 4)))) {
            label_text = "self";
            orientation = 45;
            c_resp = "n";
        } else {
            if ((((2 / 4) < value) && (value < (3 / 4)))) {
                label_text = "other";
                orientation = 0;
                c_resp = "n";
            } else {
                if ((((3 / 4) < value) && (value < (4 / 4)))) {
                    label_text = "other";
                    orientation = 45;
                    c_resp = "y";
                } else {
                    console.log("we just broke math");
                }
            }
        }
    }
    
    label.setText(label_text);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    polygon.setOri(orientation);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(label);
    trialComponents.push(key_resp_2);
    trialComponents.push(polygon);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *label* updates
    if (t >= 0.5 && label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label.tStart = t;  // (not accounting for frame time here)
      label.frameNStart = frameN;  // exact frame index
      
      label.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.5 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_2.keys == c_resp) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon* updates
    if (t >= 0.5 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(c_resp)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    if ((key_resp_2.corr === 1)) {
        feedback_text = "correct response";
    } else {
        feedback_text = "wrong response";
    }
    
    text_2.setText(feedback_text);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(text_2);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_instruct_6_allKeys;
var free_view_instructionComponents;
function free_view_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'free_view_instruction' ---
    t = 0;
    free_view_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_instruct_6.keys = undefined;
    key_instruct_6.rt = undefined;
    _key_instruct_6_allKeys = [];
    // keep track of which components have finished
    free_view_instructionComponents = [];
    free_view_instructionComponents.push(text_norm_6);
    free_view_instructionComponents.push(key_instruct_6);
    
    for (const thisComponent of free_view_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function free_view_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'free_view_instruction' ---
    // get current time
    t = free_view_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm_6* updates
    if (t >= 0.0 && text_norm_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm_6.tStart = t;  // (not accounting for frame time here)
      text_norm_6.frameNStart = frameN;  // exact frame index
      
      text_norm_6.setAutoDraw(true);
    }
    
    
    // *key_instruct_6* updates
    if (t >= 0.0 && key_instruct_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct_6.tStart = t;  // (not accounting for frame time here)
      key_instruct_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_6.clearEvents(); });
    }
    
    if (key_instruct_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_6_allKeys = _key_instruct_6_allKeys.concat(theseKeys);
      if (_key_instruct_6_allKeys.length > 0) {
        key_instruct_6.keys = _key_instruct_6_allKeys[0].name;  // just the first key pressed
        key_instruct_6.rt = _key_instruct_6_allKeys[0].rt;
        key_instruct_6.duration = _key_instruct_6_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of free_view_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function free_view_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'free_view_instruction' ---
    for (const thisComponent of free_view_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct_6.corr, level);
    }
    psychoJS.experiment.addData('key_instruct_6.keys', key_instruct_6.keys);
    if (typeof key_instruct_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct_6.rt', key_instruct_6.rt);
        psychoJS.experiment.addData('key_instruct_6.duration', key_instruct_6.duration);
        routineTimer.reset();
        }
    
    key_instruct_6.stop();
    // the Routine "free_view_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var free_viewingComponents;
function free_viewingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'free_viewing' ---
    t = 0;
    free_viewingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('free_viewing.started', globalClock.getTime());
    image.setImage(free_view_image);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    free_viewingComponents = [];
    free_viewingComponents.push(image);
    free_viewingComponents.push(key_resp_3);
    
    for (const thisComponent of free_viewingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function free_viewingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'free_viewing' ---
    // get current time
    t = free_viewingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of free_viewingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function free_viewingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'free_viewing' ---
    for (const thisComponent of free_viewingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('free_viewing.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "free_viewing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_instruct_4_allKeys;
var block1_startComponents;
function block1_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block1_start' ---
    t = 0;
    block1_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_instruct_4.keys = undefined;
    key_instruct_4.rt = undefined;
    _key_instruct_4_allKeys = [];
    // keep track of which components have finished
    block1_startComponents = [];
    block1_startComponents.push(text_norm_4);
    block1_startComponents.push(key_instruct_4);
    
    for (const thisComponent of block1_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block1_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block1_start' ---
    // get current time
    t = block1_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm_4* updates
    if (t >= 0.0 && text_norm_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm_4.tStart = t;  // (not accounting for frame time here)
      text_norm_4.frameNStart = frameN;  // exact frame index
      
      text_norm_4.setAutoDraw(true);
    }
    
    
    // *key_instruct_4* updates
    if (t >= 0.0 && key_instruct_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruct_4.tStart = t;  // (not accounting for frame time here)
      key_instruct_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruct_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruct_4.clearEvents(); });
    }
    
    if (key_instruct_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruct_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_instruct_4_allKeys = _key_instruct_4_allKeys.concat(theseKeys);
      if (_key_instruct_4_allKeys.length > 0) {
        key_instruct_4.keys = _key_instruct_4_allKeys[0].name;  // just the first key pressed
        key_instruct_4.rt = _key_instruct_4_allKeys[0].rt;
        key_instruct_4.duration = _key_instruct_4_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block1_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block1_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block1_start' ---
    for (const thisComponent of block1_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruct_4.corr, level);
    }
    psychoJS.experiment.addData('key_instruct_4.keys', key_instruct_4.keys);
    if (typeof key_instruct_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruct_4.rt', key_instruct_4.rt);
        psychoJS.experiment.addData('key_instruct_4.duration', key_instruct_4.duration);
        routineTimer.reset();
        }
    
    key_instruct_4.stop();
    // the Routine "block1_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var random_value;
var _key_resp_4_allKeys;
var block_1Components;
function block_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_1' ---
    t = 0;
    block_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    random_value = Math.random();
    psychoJS.experiment.addData("distractor_location", "center");
    if ((random_value < (1 / 4))) {
        orientation_block_one = 0;
        label_block_one = "Self";
        correct_resp_blockOne = "y";
        psychoJS.experiment.addData("Orientation", 0);
        psychoJS.experiment.addData("Label", "Self");
    } else {
        if ((((1 / 2) < random_value) && (random_value < (2 / 4)))) {
            orientation_block_one = 0;
            label_block_one = "Other";
            correct_resp_blockOne = "n";
            psychoJS.experiment.addData("Orientation", 0);
            psychoJS.experiment.addData("Label", "Other");
        } else {
            if ((((2 / 4) < random_value) && (random_value < (3 / 4)))) {
                orientation_block_one = 45;
                label_block_one = "Self";
                correct_resp_blockOne = "n";
                psychoJS.experiment.addData("Orientation", 45);
                psychoJS.experiment.addData("Label", "Self");
            } else {
                orientation_block_one = 45;
                label_block_one = "Other";
                correct_resp_blockOne = "y";
                psychoJS.experiment.addData("Orientation", 45);
                psychoJS.experiment.addData("Label", "Other");
                psychoJS.experiment.addData("random_value", random_value);
            }
        }
    }
    
    block1_ploygon.setOri(orientation_block_one);
    distractor_block1.setImage(distractors_blockOne);
    blockone_label.setText(label_block_one);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    block_1Components = [];
    block_1Components.push(block1_fixation);
    block_1Components.push(block1_ploygon);
    block_1Components.push(distractor_block1);
    block_1Components.push(blockone_label);
    block_1Components.push(key_resp_4);
    
    for (const thisComponent of block_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_1' ---
    // get current time
    t = block_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block1_fixation* updates
    if (t >= 0.0 && block1_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1_fixation.tStart = t;  // (not accounting for frame time here)
      block1_fixation.frameNStart = frameN;  // exact frame index
      
      block1_fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (block1_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      block1_fixation.setAutoDraw(false);
    }
    
    // *block1_ploygon* updates
    if (t >= 0.5 && block1_ploygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1_ploygon.tStart = t;  // (not accounting for frame time here)
      block1_ploygon.frameNStart = frameN;  // exact frame index
      
      block1_ploygon.setAutoDraw(true);
    }
    
    
    // *distractor_block1* updates
    if (t >= 0.5 && distractor_block1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_block1.tStart = t;  // (not accounting for frame time here)
      distractor_block1.frameNStart = frameN;  // exact frame index
      
      distractor_block1.setAutoDraw(true);
    }
    
    
    // *blockone_label* updates
    if (t >= 0.5 && blockone_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockone_label.tStart = t;  // (not accounting for frame time here)
      blockone_label.frameNStart = frameN;  // exact frame index
      
      blockone_label.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.5 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_4.keys == correct_resp_blockOne) {
            key_resp_4.corr = 1;
        } else {
            key_resp_4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_1' ---
    for (const thisComponent of block_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_4.keys === undefined) {
      if (['None','none',undefined].includes(correct_resp_blockOne)) {
         key_resp_4.corr = 1;  // correct non-response
      } else {
         key_resp_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    psychoJS.experiment.addData('key_resp_4.corr', key_resp_4.corr);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "block_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var random_value1;
var _key_resp_5_allKeys;
var block_2Components;
function block_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_2' ---
    t = 0;
    block_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    random_value = Math.random();
    random_value1 = Math.random();
    psychoJS.experiment.addData("distractor_location", "periphery");
    if ((random_value1 < (1 / 2))) {
        x_position = 0.4;
    } else {
        if ((((1 / 2) < random_value1) && (random_value1 < (2 / 2)))) {
            x_position = (- 0.4);
        } else {
            x_position = 0.0;
        }
    }
    if ((random_value < (1 / 4))) {
        orientation_block_two = 0;
        label_block_two = "Self";
        correct_resp_blockTwo = "y";
        psychoJS.experiment.addData("Orientation", 0);
        psychoJS.experiment.addData("Label", "Self");
    } else {
        if ((((1 / 2) < random_value) && (random_value < (2 / 4)))) {
            orientation_block_two = 0;
            label_block_two = "Other";
            correct_resp_blockTwo = "n";
            psychoJS.experiment.addData("Orientation", 0);
            psychoJS.experiment.addData("Label", "Other");
        } else {
            if ((((2 / 4) < random_value) && (random_value < (3 / 4)))) {
                orientation_block_two = 45;
                label_block_two = "Self";
                correct_resp_blockTwo = "n";
                psychoJS.experiment.addData("Orientation", 45);
                psychoJS.experiment.addData("Label", "Self");
            } else {
                orientation_block_two = 45;
                label_block_two = "Other";
                correct_resp_blockTwo = "y";
                psychoJS.experiment.addData("Orientation", 45);
                psychoJS.experiment.addData("Label", "Other");
                psychoJS.experiment.addData("random_value", random_value);
            }
        }
    }
    
    block2_polygon.setOri(orientation_block_two);
    distractor_block2.setPos([x_position, (- 0.08)]);
    distractor_block2.setImage(distractor_blockTwo);
    blocktwo_label.setText(label_block_two);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    block_2Components = [];
    block_2Components.push(block2_fixation);
    block_2Components.push(block2_polygon);
    block_2Components.push(distractor_block2);
    block_2Components.push(blocktwo_label);
    block_2Components.push(key_resp_5);
    block_2Components.push(text_3);
    
    for (const thisComponent of block_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_2' ---
    // get current time
    t = block_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block2_fixation* updates
    if (t >= 0.0 && block2_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block2_fixation.tStart = t;  // (not accounting for frame time here)
      block2_fixation.frameNStart = frameN;  // exact frame index
      
      block2_fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (block2_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      block2_fixation.setAutoDraw(false);
    }
    
    // *block2_polygon* updates
    if (t >= 0.5 && block2_polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block2_polygon.tStart = t;  // (not accounting for frame time here)
      block2_polygon.frameNStart = frameN;  // exact frame index
      
      block2_polygon.setAutoDraw(true);
    }
    
    
    // *distractor_block2* updates
    if (t >= 0.5 && distractor_block2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_block2.tStart = t;  // (not accounting for frame time here)
      distractor_block2.frameNStart = frameN;  // exact frame index
      
      distractor_block2.setAutoDraw(true);
    }
    
    
    // *blocktwo_label* updates
    if (t >= 0.5 && blocktwo_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blocktwo_label.tStart = t;  // (not accounting for frame time here)
      blocktwo_label.frameNStart = frameN;  // exact frame index
      
      blocktwo_label.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.5 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_5.keys == correct_resp_blockTwo) {
            key_resp_5.corr = 1;
        } else {
            key_resp_5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_2' ---
    for (const thisComponent of block_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_5.keys === undefined) {
      if (['None','none',undefined].includes(correct_resp_blockTwo)) {
         key_resp_5.corr = 1;  // correct non-response
      } else {
         key_resp_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    psychoJS.experiment.addData('key_resp_5.corr', key_resp_5.corr);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "block_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thank_youComponents;
function thank_youRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thank_you' ---
    t = 0;
    thank_youClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    thank_youComponents = [];
    thank_youComponents.push(text_norm_7);
    
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thank_youRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank_you' ---
    // get current time
    t = thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_norm_7* updates
    if (t >= 0.0 && text_norm_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_norm_7.tStart = t;  // (not accounting for frame time here)
      text_norm_7.frameNStart = frameN;  // exact frame index
      
      text_norm_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_norm_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_norm_7.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thank_youRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank_you' ---
    for (const thisComponent of thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
