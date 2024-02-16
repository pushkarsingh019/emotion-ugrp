#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.2),
    on Mon Feb 12 19:43:38 2024
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2023.2.2')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.2'
expName = 'preliminary_experiment'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date': data.getDateStr(),  # add a simple timestamp
    'expName': expName,
    'psychopyVersion': psychopyVersion,
}


def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # temporarily remove keys which the dialog doesn't need to show
    poppedKeys = {
        'date': expInfo.pop('date', data.getDateStr()),
        'expName': expInfo.pop('expName', expName),
        'psychopyVersion': expInfo.pop('psychopyVersion', psychopyVersion),
    }
    # show participant info dialog
    dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # restore hidden keys
    expInfo.update(poppedKeys)
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/pushkarsingh/Documents/01 University/03 Self Prioritisation Research/experiment/Psychopy UGRP Experiment.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(logging.EXP)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=logging.EXP)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1920, 1080], fullscr=True, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.mouseVisible = False
    win.hideMessage()
    return win


def setupInputs(expInfo, thisExp, win):
    """
    Setup whatever inputs are available (mouse, keyboard, eyetracker, etc.)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    dict
        Dictionary of input devices by name.
    """
    # --- Setup input devices ---
    inputs = {}
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    eyetracker = None
    
    # create a default keyboard (e.g. to check for escape)
    defaultKeyboard = keyboard.Keyboard(backend='iohub')
    # return inputs dict
    return {
        'ioServer': ioServer,
        'defaultKeyboard': defaultKeyboard,
        'eyetracker': eyetracker,
    }

def pauseExperiment(thisExp, inputs=None, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # make sure we have a keyboard
        if inputs is None:
            inputs = {
                'defaultKeyboard': keyboard.Keyboard(backend='ioHub')
            }
        # check for quit (typically the Esc key)
        if inputs['defaultKeyboard'].getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win, inputs=inputs)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, inputs=inputs, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, inputs, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    inputs : dict
        Dictionary of input devices by name.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = inputs['ioServer']
    defaultKeyboard = inputs['defaultKeyboard']
    eyetracker = inputs['eyetracker']
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "Instructions" ---
    text_norm = visual.TextStim(win=win, name='text_norm',
        text="Welcome to the experiment.\n\npress 'spacebar' to continue.",
        font='Arial',
        units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_instruct = keyboard.Keyboard()
    # Run 'Begin Experiment' code from text_align
    # Code components should usually appear at the top
    # of the routine. This one has to appear after the
    # text component it refers to.
    text_norm.alignText= 'left'
    
    # --- Initialize components for Routine "self_other_instruction" ---
    text_norm_2 = visual.TextStim(win=win, name='text_norm_2',
        text="In this study, you will be shown two shapes (triangle and square) with two labels (you and stranger). You have to memorize this association. \n\n- You are represented by a Triangle (You-Triangle)\n- There is a Stranger (an unknown person to you), who is represented by square (Stranger-square)\n\nTake a few minutes to memorize this association. Let me know when you have memorized and ready to proceed to the experiment.\n\npress 'spacebar' to continue\n",
        font='Arial',
        units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_instruct_2 = keyboard.Keyboard()
    # Run 'Begin Experiment' code from text_align_2
    # Code components should usually appear at the top
    # of the routine. This one has to appear after the
    # text component it refers to.
    text_norm.alignText= 'left'
    
    # --- Initialize components for Routine "self_other_info" ---
    # Run 'Begin Experiment' code from code_7
    you_vertices = 3
    other_vertices = 4
    self_shape = visual.Polygon(
        win=win, name='self_shape',
        edges=you_vertices, size=(0.2, 0.2),
        ori=0.0, pos=(-0.2, -0.025), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    other = visual.Polygon(
        win=win, name='other',
        edges=other_vertices, size=(0.2, 0.2),
        ori=45.0, pos=(0.2, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    label_self = visual.TextStim(win=win, name='label_self',
        text='You',
        font='Open Sans',
        pos=(-0.2, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    label_other = visual.TextStim(win=win, name='label_other',
        text='other',
        font='Open Sans',
        pos=(0.2, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    text = visual.TextStim(win=win, name='text',
        text="press 'spacebar' to contiue",
        font='Open Sans',
        pos=(0, -0.4), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    key_resp = keyboard.Keyboard()
    
    # --- Initialize components for Routine "self_other_starting" ---
    text_norm_3 = visual.TextStim(win=win, name='text_norm_3',
        text="Your task is to judge whether the shape label pairing is correct or incorrect. If the shape label pairing is correct press 'z' and if its incorrect press 'm'.\n\npress 'spacebar' to continue\n",
        font='Arial',
        units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_instruct_3 = keyboard.Keyboard()
    # Run 'Begin Experiment' code from text_align_3
    # Code components should usually appear at the top
    # of the routine. This one has to appear after the
    # text component it refers to.
    text_norm.alignText= 'left'
    
    # --- Initialize components for Routine "trial" ---
    # Run 'Begin Experiment' code from code
    label_text = ""
    shape_vertices = "triangle"
    
    value = random()
    
    if value <= 1/4:
        label_text = "you"
        shape_vertices = "triangle"
        c_resp = 'm'
    elif 1/4 < value <= 2/4:
        label_text = "you"
        shape_vertices = "square"
        c_resp = 'z'
    elif 2/4 < value <= 3/4:
        label_text = "other"
        shape_vertices = "triangle"
        c_resp = 'z'
    elif 3/4 < value <= 4/4:
        label_text = "other"
        shape_vertices = "square"
        c_resp = 'm'
    else:
        print("we just broke math")
    fixation = visual.ShapeStim(
        win=win, name='fixation', vertices='cross',
        size=(0.05, 0.05),
        ori=None, pos=(0, 0), anchor='center',
        lineWidth=0.8,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    label = visual.TextStim(win=win, name='label',
        text='',
        font='Open Sans',
        pos=(0, -0.1), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_2 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "feedback" ---
    # Run 'Begin Experiment' code from code_2
    feedback_text = ""
    text_2 = visual.TextStim(win=win, name='text_2',
        text='',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "free_view_instruction" ---
    text_norm_6 = visual.TextStim(win=win, name='text_norm_6',
        text='Now you will see a series of images. press any key to move to the next one.\n\nPress the spacebar to continue',
        font='Arial',
        units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_instruct_6 = keyboard.Keyboard()
    # Run 'Begin Experiment' code from text_align_6
    # Code components should usually appear at the top
    # of the routine. This one has to appear after the
    # text component it refers to.
    text_norm.alignText= 'left'
    
    # --- Initialize components for Routine "free_viewing" ---
    image = visual.ImageStim(
        win=win,
        name='image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    key_resp_3 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "block1_start" ---
    text_norm_4 = visual.TextStim(win=win, name='text_norm_4',
        text="The experiment is about to start. If the shape and the label match, press 'y', if no, press 'n'. try to answer as fast as you can with accuracy.\n\npress 'spacebar' to continue\n",
        font='Arial',
        units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_instruct_4 = keyboard.Keyboard()
    # Run 'Begin Experiment' code from text_align_4
    # Code components should usually appear at the top
    # of the routine. This one has to appear after the
    # text component it refers to.
    text_norm.alignText= 'left'
    
    # --- Initialize components for Routine "block_1" ---
    # Run 'Begin Experiment' code from code_3
    orientation_block_one = ""
    label_block_one = ""
    correct_resp_blockOne = ""
    block1_fixation = visual.ShapeStim(
        win=win, name='block1_fixation', vertices='cross',
        size=(0.05, 0.05),
        ori=45.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    block1_ploygon = visual.Rect(
        win=win, name='block1_ploygon',
        width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
        ori=1.0, pos=(0, 0.3), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    distractor_block1 = visual.ImageStim(
        win=win,
        name='distractor_block1', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, -0.08), size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    blockone_label = visual.TextStim(win=win, name='blockone_label',
        text='',
        font='Open Sans',
        pos=(0, -0.34), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    key_resp_4 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "block1_feedback" ---
    # Run 'Begin Experiment' code from code_5
    feedback_blockOne = ""
    text_3 = visual.TextStim(win=win, name='text_3',
        text='',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "block_2" ---
    # Run 'Begin Experiment' code from code_4
    orientation_block_two = ""
    label_block_two = ""
    correct_resp_blockTwo = ""
    x_position = 0.0
    block2_fixation = visual.ShapeStim(
        win=win, name='block2_fixation', vertices='cross',
        size=(0.05, 0.05),
        ori=45.0, pos=(0, 0), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    block2_polygon = visual.Rect(
        win=win, name='block2_polygon',
        width=(0.2, 0.2)[0], height=(0.2, 0.2)[1],
        ori=1.0, pos=(0, 0.3), anchor='center',
        lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    distractor_block2 = visual.ImageStim(
        win=win,
        name='distractor_block2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(0.4, 0.4),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    blocktwo_label = visual.TextStim(win=win, name='blocktwo_label',
        text='',
        font='Open Sans',
        pos=(0, -0.34), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    key_resp_5 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "block2_feedback" ---
    # Run 'Begin Experiment' code from code_6
    feedback_blockTwo = ""
    text_4 = visual.TextStim(win=win, name='text_4',
        text='',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "thank_you" ---
    text_norm_7 = visual.TextStim(win=win, name='text_norm_7',
        text='Thank you for participating :))',
        font='Arial',
        units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # create some handy timers
    if globalClock is None:
        globalClock = core.Clock()  # to track the time since experiment started
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6)
    
    # --- Prepare to start Routine "Instructions" ---
    continueRoutine = True
    # update component parameters for each repeat
    key_instruct.keys = []
    key_instruct.rt = []
    _key_instruct_allKeys = []
    # keep track of which components have finished
    InstructionsComponents = [text_norm, key_instruct]
    for thisComponent in InstructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Instructions" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_norm* updates
        
        # if text_norm is starting this frame...
        if text_norm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_norm.frameNStart = frameN  # exact frame index
            text_norm.tStart = t  # local t and not account for scr refresh
            text_norm.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_norm, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_norm.status = STARTED
            text_norm.setAutoDraw(True)
        
        # if text_norm is active this frame...
        if text_norm.status == STARTED:
            # update params
            pass
        
        # *key_instruct* updates
        waitOnFlip = False
        
        # if key_instruct is starting this frame...
        if key_instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_instruct.frameNStart = frameN  # exact frame index
            key_instruct.tStart = t  # local t and not account for scr refresh
            key_instruct.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_instruct, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_instruct.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_instruct.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_instruct.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_instruct.status == STARTED and not waitOnFlip:
            theseKeys = key_instruct.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_instruct_allKeys.extend(theseKeys)
            if len(_key_instruct_allKeys):
                key_instruct.keys = _key_instruct_allKeys[0].name  # just the first key pressed
                key_instruct.rt = _key_instruct_allKeys[0].rt
                key_instruct.duration = _key_instruct_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in InstructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Instructions" ---
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_instruct.keys in ['', [], None]:  # No response was made
        key_instruct.keys = None
    thisExp.addData('key_instruct.keys',key_instruct.keys)
    if key_instruct.keys != None:  # we had a response
        thisExp.addData('key_instruct.rt', key_instruct.rt)
        thisExp.addData('key_instruct.duration', key_instruct.duration)
    thisExp.nextEntry()
    # the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "self_other_instruction" ---
    continueRoutine = True
    # update component parameters for each repeat
    key_instruct_2.keys = []
    key_instruct_2.rt = []
    _key_instruct_2_allKeys = []
    # keep track of which components have finished
    self_other_instructionComponents = [text_norm_2, key_instruct_2]
    for thisComponent in self_other_instructionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "self_other_instruction" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_norm_2* updates
        
        # if text_norm_2 is starting this frame...
        if text_norm_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_norm_2.frameNStart = frameN  # exact frame index
            text_norm_2.tStart = t  # local t and not account for scr refresh
            text_norm_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_norm_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_norm_2.status = STARTED
            text_norm_2.setAutoDraw(True)
        
        # if text_norm_2 is active this frame...
        if text_norm_2.status == STARTED:
            # update params
            pass
        
        # *key_instruct_2* updates
        waitOnFlip = False
        
        # if key_instruct_2 is starting this frame...
        if key_instruct_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_instruct_2.frameNStart = frameN  # exact frame index
            key_instruct_2.tStart = t  # local t and not account for scr refresh
            key_instruct_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_instruct_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_instruct_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_instruct_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_instruct_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_instruct_2.status == STARTED and not waitOnFlip:
            theseKeys = key_instruct_2.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_instruct_2_allKeys.extend(theseKeys)
            if len(_key_instruct_2_allKeys):
                key_instruct_2.keys = _key_instruct_2_allKeys[0].name  # just the first key pressed
                key_instruct_2.rt = _key_instruct_2_allKeys[0].rt
                key_instruct_2.duration = _key_instruct_2_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in self_other_instructionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "self_other_instruction" ---
    for thisComponent in self_other_instructionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_instruct_2.keys in ['', [], None]:  # No response was made
        key_instruct_2.keys = None
    thisExp.addData('key_instruct_2.keys',key_instruct_2.keys)
    if key_instruct_2.keys != None:  # we had a response
        thisExp.addData('key_instruct_2.rt', key_instruct_2.rt)
        thisExp.addData('key_instruct_2.duration', key_instruct_2.duration)
    thisExp.nextEntry()
    # the Routine "self_other_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "self_other_info" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_7
    you_vertices = 3
    other_vertices = 4
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    self_other_infoComponents = [self_shape, other, label_self, label_other, text, key_resp]
    for thisComponent in self_other_infoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "self_other_info" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *self_shape* updates
        
        # if self_shape is starting this frame...
        if self_shape.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            self_shape.frameNStart = frameN  # exact frame index
            self_shape.tStart = t  # local t and not account for scr refresh
            self_shape.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(self_shape, 'tStartRefresh')  # time at next scr refresh
            # update status
            self_shape.status = STARTED
            self_shape.setAutoDraw(True)
        
        # if self_shape is active this frame...
        if self_shape.status == STARTED:
            # update params
            pass
        
        # *other* updates
        
        # if other is starting this frame...
        if other.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            other.frameNStart = frameN  # exact frame index
            other.tStart = t  # local t and not account for scr refresh
            other.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(other, 'tStartRefresh')  # time at next scr refresh
            # update status
            other.status = STARTED
            other.setAutoDraw(True)
        
        # if other is active this frame...
        if other.status == STARTED:
            # update params
            pass
        
        # *label_self* updates
        
        # if label_self is starting this frame...
        if label_self.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            label_self.frameNStart = frameN  # exact frame index
            label_self.tStart = t  # local t and not account for scr refresh
            label_self.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(label_self, 'tStartRefresh')  # time at next scr refresh
            # update status
            label_self.status = STARTED
            label_self.setAutoDraw(True)
        
        # if label_self is active this frame...
        if label_self.status == STARTED:
            # update params
            pass
        
        # *label_other* updates
        
        # if label_other is starting this frame...
        if label_other.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            label_other.frameNStart = frameN  # exact frame index
            label_other.tStart = t  # local t and not account for scr refresh
            label_other.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(label_other, 'tStartRefresh')  # time at next scr refresh
            # update status
            label_other.status = STARTED
            label_other.setAutoDraw(True)
        
        # if label_other is active this frame...
        if label_other.status == STARTED:
            # update params
            pass
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *key_resp* updates
        
        # if key_resp is starting this frame...
        if key_resp.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp.status = STARTED
            # keyboard checking is just starting
            key_resp.clock.reset()  # now t=0
            key_resp.clearEvents(eventType='keyboard')
        if key_resp.status == STARTED:
            theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                key_resp.duration = _key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in self_other_infoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "self_other_info" ---
    for thisComponent in self_other_infoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "self_other_info" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "self_other_starting" ---
    continueRoutine = True
    # update component parameters for each repeat
    key_instruct_3.keys = []
    key_instruct_3.rt = []
    _key_instruct_3_allKeys = []
    # keep track of which components have finished
    self_other_startingComponents = [text_norm_3, key_instruct_3]
    for thisComponent in self_other_startingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "self_other_starting" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_norm_3* updates
        
        # if text_norm_3 is starting this frame...
        if text_norm_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_norm_3.frameNStart = frameN  # exact frame index
            text_norm_3.tStart = t  # local t and not account for scr refresh
            text_norm_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_norm_3, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_norm_3.status = STARTED
            text_norm_3.setAutoDraw(True)
        
        # if text_norm_3 is active this frame...
        if text_norm_3.status == STARTED:
            # update params
            pass
        
        # *key_instruct_3* updates
        waitOnFlip = False
        
        # if key_instruct_3 is starting this frame...
        if key_instruct_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_instruct_3.frameNStart = frameN  # exact frame index
            key_instruct_3.tStart = t  # local t and not account for scr refresh
            key_instruct_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_instruct_3, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_instruct_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_instruct_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_instruct_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_instruct_3.status == STARTED and not waitOnFlip:
            theseKeys = key_instruct_3.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_instruct_3_allKeys.extend(theseKeys)
            if len(_key_instruct_3_allKeys):
                key_instruct_3.keys = _key_instruct_3_allKeys[0].name  # just the first key pressed
                key_instruct_3.rt = _key_instruct_3_allKeys[0].rt
                key_instruct_3.duration = _key_instruct_3_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in self_other_startingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "self_other_starting" ---
    for thisComponent in self_other_startingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_instruct_3.keys in ['', [], None]:  # No response was made
        key_instruct_3.keys = None
    thisExp.addData('key_instruct_3.keys',key_instruct_3.keys)
    if key_instruct_3.keys != None:  # we had a response
        thisExp.addData('key_instruct_3.rt', key_instruct_3.rt)
        thisExp.addData('key_instruct_3.duration', key_instruct_3.duration)
    thisExp.nextEntry()
    # the Routine "self_other_starting" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=10.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "trial" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code
        polygon = visual.ShapeStim(
                win=win, name='polygon',
                size=(0.2, 0.2), vertices='triangle',
                ori=0.0, pos=(0, 0.1), anchor='center',
                lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
                opacity=None, depth=-4.0, interpolate=True)
                
        
        label.setText(label_text)
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        # keep track of which components have finished
        trialComponents = [fixation, label, key_resp_2]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # Run 'Each Frame' code from code
            if fixation.status == "FINISHED":
                polygon.setAutoDraw(True)
            
            # *fixation* updates
            
            # if fixation is starting this frame...
            if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation.frameNStart = frameN  # exact frame index
                fixation.tStart = t  # local t and not account for scr refresh
                fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixation.started')
                # update status
                fixation.status = STARTED
                fixation.setAutoDraw(True)
            
            # if fixation is active this frame...
            if fixation.status == STARTED:
                # update params
                pass
            
            # if fixation is stopping this frame...
            if fixation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixation.stopped')
                    # update status
                    fixation.status = FINISHED
                    fixation.setAutoDraw(False)
            
            # *label* updates
            
            # if label is starting this frame...
            if label.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                label.frameNStart = frameN  # exact frame index
                label.tStart = t  # local t and not account for scr refresh
                label.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label, 'tStartRefresh')  # time at next scr refresh
                # update status
                label.status = STARTED
                label.setAutoDraw(True)
            
            # if label is active this frame...
            if label.status == STARTED:
                # update params
                pass
            
            # *key_resp_2* updates
            waitOnFlip = False
            
            # if key_resp_2 is starting this frame...
            if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2.frameNStart = frameN  # exact frame index
                key_resp_2.tStart = t  # local t and not account for scr refresh
                key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                key_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_2.getKeys(keyList=['z','m'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_2_allKeys.extend(theseKeys)
                if len(_key_resp_2_allKeys):
                    key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                    key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                    key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                    # was this correct?
                    if (key_resp_2.keys == str(c_resp)) or (key_resp_2.keys == c_resp):
                        key_resp_2.corr = 1
                    else:
                        key_resp_2.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial" ---
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code
        polygon.setAutoDraw(False)
        # check responses
        if key_resp_2.keys in ['', [], None]:  # No response was made
            key_resp_2.keys = None
            # was no response the correct answer?!
            if str(c_resp).lower() == 'none':
               key_resp_2.corr = 1;  # correct non-response
            else:
               key_resp_2.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp_2.keys',key_resp_2.keys)
        trials.addData('key_resp_2.corr', key_resp_2.corr)
        if key_resp_2.keys != None:  # we had a response
            trials.addData('key_resp_2.rt', key_resp_2.rt)
            trials.addData('key_resp_2.duration', key_resp_2.duration)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "feedback" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_2
        if key_resp_2.corr == 1:
            feedback_text = "correct"
        else:
            feedback_text = "wrong"
        text_2.setText(feedback_text)
        # keep track of which components have finished
        feedbackComponents = [text_2]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "feedback" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2* updates
            
            # if text_2 is starting this frame...
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_2.status = STARTED
                text_2.setAutoDraw(True)
            
            # if text_2 is active this frame...
            if text_2.status == STARTED:
                # update params
                pass
            
            # if text_2 is stopping this frame...
            if text_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_2.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    text_2.tStop = t  # not accounting for scr refresh
                    text_2.frameNStop = frameN  # exact frame index
                    # update status
                    text_2.status = FINISHED
                    text_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "feedback" ---
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
    # completed 10.0 repeats of 'trials'
    
    
    # --- Prepare to start Routine "free_view_instruction" ---
    continueRoutine = True
    # update component parameters for each repeat
    key_instruct_6.keys = []
    key_instruct_6.rt = []
    _key_instruct_6_allKeys = []
    # keep track of which components have finished
    free_view_instructionComponents = [text_norm_6, key_instruct_6]
    for thisComponent in free_view_instructionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "free_view_instruction" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_norm_6* updates
        
        # if text_norm_6 is starting this frame...
        if text_norm_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_norm_6.frameNStart = frameN  # exact frame index
            text_norm_6.tStart = t  # local t and not account for scr refresh
            text_norm_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_norm_6, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_norm_6.status = STARTED
            text_norm_6.setAutoDraw(True)
        
        # if text_norm_6 is active this frame...
        if text_norm_6.status == STARTED:
            # update params
            pass
        
        # *key_instruct_6* updates
        waitOnFlip = False
        
        # if key_instruct_6 is starting this frame...
        if key_instruct_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_instruct_6.frameNStart = frameN  # exact frame index
            key_instruct_6.tStart = t  # local t and not account for scr refresh
            key_instruct_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_instruct_6, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_instruct_6.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_instruct_6.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_instruct_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_instruct_6.status == STARTED and not waitOnFlip:
            theseKeys = key_instruct_6.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_instruct_6_allKeys.extend(theseKeys)
            if len(_key_instruct_6_allKeys):
                key_instruct_6.keys = _key_instruct_6_allKeys[0].name  # just the first key pressed
                key_instruct_6.rt = _key_instruct_6_allKeys[0].rt
                key_instruct_6.duration = _key_instruct_6_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in free_view_instructionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "free_view_instruction" ---
    for thisComponent in free_view_instructionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_instruct_6.keys in ['', [], None]:  # No response was made
        key_instruct_6.keys = None
    thisExp.addData('key_instruct_6.keys',key_instruct_6.keys)
    if key_instruct_6.keys != None:  # we had a response
        thisExp.addData('key_instruct_6.rt', key_instruct_6.rt)
        thisExp.addData('key_instruct_6.duration', key_instruct_6.duration)
    thisExp.nextEntry()
    # the Routine "free_view_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_2 = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('image_paths.csv'),
        seed=None, name='trials_2')
    thisExp.addLoop(trials_2)  # add the loop to the experiment
    thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            globals()[paramName] = thisTrial_2[paramName]
    
    for thisTrial_2 in trials_2:
        currentLoop = trials_2
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                globals()[paramName] = thisTrial_2[paramName]
        
        # --- Prepare to start Routine "free_viewing" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('free_viewing.started', globalClock.getTime())
        image.setImage(free_view_image)
        key_resp_3.keys = []
        key_resp_3.rt = []
        _key_resp_3_allKeys = []
        # keep track of which components have finished
        free_viewingComponents = [image, key_resp_3]
        for thisComponent in free_viewingComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "free_viewing" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image* updates
            
            # if image is starting this frame...
            if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image.frameNStart = frameN  # exact frame index
                image.tStart = t  # local t and not account for scr refresh
                image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image.started')
                # update status
                image.status = STARTED
                image.setAutoDraw(True)
            
            # if image is active this frame...
            if image.status == STARTED:
                # update params
                pass
            
            # *key_resp_3* updates
            waitOnFlip = False
            
            # if key_resp_3 is starting this frame...
            if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_3.frameNStart = frameN  # exact frame index
                key_resp_3.tStart = t  # local t and not account for scr refresh
                key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_3.started')
                # update status
                key_resp_3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_3.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_3.getKeys(keyList=None, ignoreKeys=["escape"], waitRelease=False)
                _key_resp_3_allKeys.extend(theseKeys)
                if len(_key_resp_3_allKeys):
                    key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                    key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                    key_resp_3.duration = _key_resp_3_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in free_viewingComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "free_viewing" ---
        for thisComponent in free_viewingComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('free_viewing.stopped', globalClock.getTime())
        # check responses
        if key_resp_3.keys in ['', [], None]:  # No response was made
            key_resp_3.keys = None
        trials_2.addData('key_resp_3.keys',key_resp_3.keys)
        if key_resp_3.keys != None:  # we had a response
            trials_2.addData('key_resp_3.rt', key_resp_3.rt)
            trials_2.addData('key_resp_3.duration', key_resp_3.duration)
        # the Routine "free_viewing" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'trials_2'
    
    
    # --- Prepare to start Routine "block1_start" ---
    continueRoutine = True
    # update component parameters for each repeat
    key_instruct_4.keys = []
    key_instruct_4.rt = []
    _key_instruct_4_allKeys = []
    # keep track of which components have finished
    block1_startComponents = [text_norm_4, key_instruct_4]
    for thisComponent in block1_startComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "block1_start" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_norm_4* updates
        
        # if text_norm_4 is starting this frame...
        if text_norm_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_norm_4.frameNStart = frameN  # exact frame index
            text_norm_4.tStart = t  # local t and not account for scr refresh
            text_norm_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_norm_4, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_norm_4.status = STARTED
            text_norm_4.setAutoDraw(True)
        
        # if text_norm_4 is active this frame...
        if text_norm_4.status == STARTED:
            # update params
            pass
        
        # *key_instruct_4* updates
        waitOnFlip = False
        
        # if key_instruct_4 is starting this frame...
        if key_instruct_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_instruct_4.frameNStart = frameN  # exact frame index
            key_instruct_4.tStart = t  # local t and not account for scr refresh
            key_instruct_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_instruct_4, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_instruct_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_instruct_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_instruct_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_instruct_4.status == STARTED and not waitOnFlip:
            theseKeys = key_instruct_4.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_instruct_4_allKeys.extend(theseKeys)
            if len(_key_instruct_4_allKeys):
                key_instruct_4.keys = _key_instruct_4_allKeys[0].name  # just the first key pressed
                key_instruct_4.rt = _key_instruct_4_allKeys[0].rt
                key_instruct_4.duration = _key_instruct_4_allKeys[0].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in block1_startComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "block1_start" ---
    for thisComponent in block1_startComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_instruct_4.keys in ['', [], None]:  # No response was made
        key_instruct_4.keys = None
    thisExp.addData('key_instruct_4.keys',key_instruct_4.keys)
    if key_instruct_4.keys != None:  # we had a response
        thisExp.addData('key_instruct_4.rt', key_instruct_4.rt)
        thisExp.addData('key_instruct_4.duration', key_instruct_4.duration)
    thisExp.nextEntry()
    # the Routine "block1_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials_3 = data.TrialHandler(nReps=1.0, method='fullRandom', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('block1_distractors.xlsx'),
        seed=None, name='trials_3')
    thisExp.addLoop(trials_3)  # add the loop to the experiment
    thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            globals()[paramName] = thisTrial_3[paramName]
    
    for thisTrial_3 in trials_3:
        currentLoop = trials_3
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
        if thisTrial_3 != None:
            for paramName in thisTrial_3:
                globals()[paramName] = thisTrial_3[paramName]
        
        # --- Prepare to start Routine "block_1" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_3
        random_value = random()
        thisExp.addData("distractor_location", "center")
        
        if random_value < 1/4:
            orientation_block_one = 0
            label_block_one = "Self"
            correct_resp_blockOne = "y"
            thisExp.addData("Orientation" , 0)
            thisExp.addData("Label", "Self")
        elif 1/2 < random_value < 2/4:
            orientation_block_one = 0
            label_block_one = "Other"
            correct_resp_blockOne = "n"
            thisExp.addData("Orientation" , 0)
            thisExp.addData("Label", "Other")
        elif 2/4 < random_value < 3/4:
            orientation_block_one = 45
            label_block_one = "Self"
            correct_resp_blockOne = "n"
            thisExp.addData("Orientation" , 45)
            thisExp.addData("Label", "Self")
        else:
            orientation_block_one = 45
            label_block_one = "Other"
            correct_resp_blockOne = "y"
            thisExp.addData("Orientation" , 45)
            thisExp.addData("Label", "Other")
            thisExp.addData("random_value", random_value)
        
        
        block1_ploygon.setOri(orientation_block_one)
        distractor_block1.setImage(distractors_blockOne)
        blockone_label.setText(label_block_one
        )
        key_resp_4.keys = []
        key_resp_4.rt = []
        _key_resp_4_allKeys = []
        # keep track of which components have finished
        block_1Components = [block1_fixation, block1_ploygon, distractor_block1, blockone_label, key_resp_4]
        for thisComponent in block_1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "block_1" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *block1_fixation* updates
            
            # if block1_fixation is starting this frame...
            if block1_fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                block1_fixation.frameNStart = frameN  # exact frame index
                block1_fixation.tStart = t  # local t and not account for scr refresh
                block1_fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(block1_fixation, 'tStartRefresh')  # time at next scr refresh
                # update status
                block1_fixation.status = STARTED
                block1_fixation.setAutoDraw(True)
            
            # if block1_fixation is active this frame...
            if block1_fixation.status == STARTED:
                # update params
                pass
            
            # if block1_fixation is stopping this frame...
            if block1_fixation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > block1_fixation.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    block1_fixation.tStop = t  # not accounting for scr refresh
                    block1_fixation.frameNStop = frameN  # exact frame index
                    # update status
                    block1_fixation.status = FINISHED
                    block1_fixation.setAutoDraw(False)
            
            # *block1_ploygon* updates
            
            # if block1_ploygon is starting this frame...
            if block1_ploygon.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                block1_ploygon.frameNStart = frameN  # exact frame index
                block1_ploygon.tStart = t  # local t and not account for scr refresh
                block1_ploygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(block1_ploygon, 'tStartRefresh')  # time at next scr refresh
                # update status
                block1_ploygon.status = STARTED
                block1_ploygon.setAutoDraw(True)
            
            # if block1_ploygon is active this frame...
            if block1_ploygon.status == STARTED:
                # update params
                pass
            
            # *distractor_block1* updates
            
            # if distractor_block1 is starting this frame...
            if distractor_block1.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                distractor_block1.frameNStart = frameN  # exact frame index
                distractor_block1.tStart = t  # local t and not account for scr refresh
                distractor_block1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distractor_block1, 'tStartRefresh')  # time at next scr refresh
                # update status
                distractor_block1.status = STARTED
                distractor_block1.setAutoDraw(True)
            
            # if distractor_block1 is active this frame...
            if distractor_block1.status == STARTED:
                # update params
                pass
            
            # *blockone_label* updates
            
            # if blockone_label is starting this frame...
            if blockone_label.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                blockone_label.frameNStart = frameN  # exact frame index
                blockone_label.tStart = t  # local t and not account for scr refresh
                blockone_label.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(blockone_label, 'tStartRefresh')  # time at next scr refresh
                # update status
                blockone_label.status = STARTED
                blockone_label.setAutoDraw(True)
            
            # if blockone_label is active this frame...
            if blockone_label.status == STARTED:
                # update params
                pass
            
            # *key_resp_4* updates
            waitOnFlip = False
            
            # if key_resp_4 is starting this frame...
            if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                key_resp_4.frameNStart = frameN  # exact frame index
                key_resp_4.tStart = t  # local t and not account for scr refresh
                key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_4.started')
                # update status
                key_resp_4.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_4.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_4.getKeys(keyList=['y','n'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_4_allKeys.extend(theseKeys)
                if len(_key_resp_4_allKeys):
                    key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                    key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                    key_resp_4.duration = _key_resp_4_allKeys[-1].duration
                    # was this correct?
                    if (key_resp_4.keys == str(correct_resp_blockOne)) or (key_resp_4.keys == correct_resp_blockOne):
                        key_resp_4.corr = 1
                    else:
                        key_resp_4.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in block_1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "block_1" ---
        for thisComponent in block_1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp_4.keys in ['', [], None]:  # No response was made
            key_resp_4.keys = None
            # was no response the correct answer?!
            if str(correct_resp_blockOne).lower() == 'none':
               key_resp_4.corr = 1;  # correct non-response
            else:
               key_resp_4.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_3 (TrialHandler)
        trials_3.addData('key_resp_4.keys',key_resp_4.keys)
        trials_3.addData('key_resp_4.corr', key_resp_4.corr)
        if key_resp_4.keys != None:  # we had a response
            trials_3.addData('key_resp_4.rt', key_resp_4.rt)
            trials_3.addData('key_resp_4.duration', key_resp_4.duration)
        # the Routine "block_1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "block1_feedback" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('block1_feedback.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_5
        if key_resp_4.corr == 1:
            feedback_blockOne = "correct response"
        else:
            feedback_blockOne = "wrong response"
        
        text_3.setText(feedback_blockOne)
        # keep track of which components have finished
        block1_feedbackComponents = [text_3]
        for thisComponent in block1_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "block1_feedback" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.3:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_3* updates
            
            # if text_3 is starting this frame...
            if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_3.frameNStart = frameN  # exact frame index
                text_3.tStart = t  # local t and not account for scr refresh
                text_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3.started')
                # update status
                text_3.status = STARTED
                text_3.setAutoDraw(True)
            
            # if text_3 is active this frame...
            if text_3.status == STARTED:
                # update params
                pass
            
            # if text_3 is stopping this frame...
            if text_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_3.tStartRefresh + 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    text_3.tStop = t  # not accounting for scr refresh
                    text_3.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_3.stopped')
                    # update status
                    text_3.status = FINISHED
                    text_3.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in block1_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "block1_feedback" ---
        for thisComponent in block1_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('block1_feedback.stopped', globalClock.getTime())
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.300000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'trials_3'
    
    
    # set up handler to look after randomisation of conditions etc
    trials_4 = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('block2_distractors.xlsx'),
        seed=None, name='trials_4')
    thisExp.addLoop(trials_4)  # add the loop to the experiment
    thisTrial_4 = trials_4.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
    if thisTrial_4 != None:
        for paramName in thisTrial_4:
            globals()[paramName] = thisTrial_4[paramName]
    
    for thisTrial_4 in trials_4:
        currentLoop = trials_4
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_4.rgb)
        if thisTrial_4 != None:
            for paramName in thisTrial_4:
                globals()[paramName] = thisTrial_4[paramName]
        
        # --- Prepare to start Routine "block_2" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_4
        random_value = random()
        random_value1 = random()
        thisExp.addData("distractor_location", "periphery")
        
        if random_value1 < 1/2:
            x_position = 0.4
        elif 1/2 < random_value1 < 2/2:
            x_position = -0.4
        else:
            x_position = 0.0
        
        if random_value < 1/4:
            orientation_block_two = 0
            label_block_two = "Self"
            correct_resp_blockTwo = "y"
            thisExp.addData("Orientation" , 0)
            thisExp.addData("Label", "Self")
        elif 1/2 < random_value < 2/4:
            orientation_block_two = 0
            label_block_two = "Other"
            correct_resp_blockTwo = "n"
            thisExp.addData("Orientation" , 0)
            thisExp.addData("Label", "Other")
        elif 2/4 < random_value < 3/4:
            orientation_block_two = 45
            label_block_two = "Self"
            correct_resp_blockTwo = "n"
            thisExp.addData("Orientation" , 45)
            thisExp.addData("Label", "Self")
        else:
            orientation_block_two = 45
            label_block_two = "Other"
            correct_resp_blockTwo = "y"
            thisExp.addData("Orientation" , 45)
            thisExp.addData("Label", "Other")
            thisExp.addData("random_value", random_value)
        
        block2_polygon.setOri(orientation_block_two)
        distractor_block2.setPos((x_position, -0.08))
        distractor_block2.setImage(distractor_blockTwo)
        blocktwo_label.setText(label_block_two
        )
        key_resp_5.keys = []
        key_resp_5.rt = []
        _key_resp_5_allKeys = []
        # keep track of which components have finished
        block_2Components = [block2_fixation, block2_polygon, distractor_block2, blocktwo_label, key_resp_5]
        for thisComponent in block_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "block_2" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *block2_fixation* updates
            
            # if block2_fixation is starting this frame...
            if block2_fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                block2_fixation.frameNStart = frameN  # exact frame index
                block2_fixation.tStart = t  # local t and not account for scr refresh
                block2_fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(block2_fixation, 'tStartRefresh')  # time at next scr refresh
                # update status
                block2_fixation.status = STARTED
                block2_fixation.setAutoDraw(True)
            
            # if block2_fixation is active this frame...
            if block2_fixation.status == STARTED:
                # update params
                pass
            
            # if block2_fixation is stopping this frame...
            if block2_fixation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > block2_fixation.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    block2_fixation.tStop = t  # not accounting for scr refresh
                    block2_fixation.frameNStop = frameN  # exact frame index
                    # update status
                    block2_fixation.status = FINISHED
                    block2_fixation.setAutoDraw(False)
            
            # *block2_polygon* updates
            
            # if block2_polygon is starting this frame...
            if block2_polygon.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                block2_polygon.frameNStart = frameN  # exact frame index
                block2_polygon.tStart = t  # local t and not account for scr refresh
                block2_polygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(block2_polygon, 'tStartRefresh')  # time at next scr refresh
                # update status
                block2_polygon.status = STARTED
                block2_polygon.setAutoDraw(True)
            
            # if block2_polygon is active this frame...
            if block2_polygon.status == STARTED:
                # update params
                pass
            
            # *distractor_block2* updates
            
            # if distractor_block2 is starting this frame...
            if distractor_block2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                distractor_block2.frameNStart = frameN  # exact frame index
                distractor_block2.tStart = t  # local t and not account for scr refresh
                distractor_block2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distractor_block2, 'tStartRefresh')  # time at next scr refresh
                # update status
                distractor_block2.status = STARTED
                distractor_block2.setAutoDraw(True)
            
            # if distractor_block2 is active this frame...
            if distractor_block2.status == STARTED:
                # update params
                pass
            
            # *blocktwo_label* updates
            
            # if blocktwo_label is starting this frame...
            if blocktwo_label.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                blocktwo_label.frameNStart = frameN  # exact frame index
                blocktwo_label.tStart = t  # local t and not account for scr refresh
                blocktwo_label.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(blocktwo_label, 'tStartRefresh')  # time at next scr refresh
                # update status
                blocktwo_label.status = STARTED
                blocktwo_label.setAutoDraw(True)
            
            # if blocktwo_label is active this frame...
            if blocktwo_label.status == STARTED:
                # update params
                pass
            
            # *key_resp_5* updates
            waitOnFlip = False
            
            # if key_resp_5 is starting this frame...
            if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                key_resp_5.frameNStart = frameN  # exact frame index
                key_resp_5.tStart = t  # local t and not account for scr refresh
                key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_5.started')
                # update status
                key_resp_5.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_5.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_5.getKeys(keyList=['y','n'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_5_allKeys.extend(theseKeys)
                if len(_key_resp_5_allKeys):
                    key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                    key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                    key_resp_5.duration = _key_resp_5_allKeys[-1].duration
                    # was this correct?
                    if (key_resp_5.keys == str(correct_resp_blockTwo)) or (key_resp_5.keys == correct_resp_blockTwo):
                        key_resp_5.corr = 1
                    else:
                        key_resp_5.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in block_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "block_2" ---
        for thisComponent in block_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp_5.keys in ['', [], None]:  # No response was made
            key_resp_5.keys = None
            # was no response the correct answer?!
            if str(correct_resp_blockTwo).lower() == 'none':
               key_resp_5.corr = 1;  # correct non-response
            else:
               key_resp_5.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_4 (TrialHandler)
        trials_4.addData('key_resp_5.keys',key_resp_5.keys)
        trials_4.addData('key_resp_5.corr', key_resp_5.corr)
        if key_resp_5.keys != None:  # we had a response
            trials_4.addData('key_resp_5.rt', key_resp_5.rt)
            trials_4.addData('key_resp_5.duration', key_resp_5.duration)
        # the Routine "block_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "block2_feedback" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('block2_feedback.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_6
        if key_resp_5.corr == 1:
            feedback_blockTwo = "correct response"
        else:
            feedback_blockTwo = "wrong response"
        
        text_4.setText(feedback_blockTwo)
        # keep track of which components have finished
        block2_feedbackComponents = [text_4]
        for thisComponent in block2_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "block2_feedback" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.3:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_4* updates
            
            # if text_4 is starting this frame...
            if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_4.frameNStart = frameN  # exact frame index
                text_4.tStart = t  # local t and not account for scr refresh
                text_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_4.started')
                # update status
                text_4.status = STARTED
                text_4.setAutoDraw(True)
            
            # if text_4 is active this frame...
            if text_4.status == STARTED:
                # update params
                pass
            
            # if text_4 is stopping this frame...
            if text_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_4.tStartRefresh + 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    text_4.tStop = t  # not accounting for scr refresh
                    text_4.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_4.stopped')
                    # update status
                    text_4.status = FINISHED
                    text_4.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in block2_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "block2_feedback" ---
        for thisComponent in block2_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('block2_feedback.stopped', globalClock.getTime())
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.300000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'trials_4'
    
    
    # --- Prepare to start Routine "thank_you" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    thank_youComponents = [text_norm_7]
    for thisComponent in thank_youComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "thank_you" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 5.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_norm_7* updates
        
        # if text_norm_7 is starting this frame...
        if text_norm_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_norm_7.frameNStart = frameN  # exact frame index
            text_norm_7.tStart = t  # local t and not account for scr refresh
            text_norm_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_norm_7, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_norm_7.status = STARTED
            text_norm_7.setAutoDraw(True)
        
        # if text_norm_7 is active this frame...
        if text_norm_7.status == STARTED:
            # update params
            pass
        
        # if text_norm_7 is stopping this frame...
        if text_norm_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_norm_7.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                text_norm_7.tStop = t  # not accounting for scr refresh
                text_norm_7.frameNStop = frameN  # exact frame index
                # update status
                text_norm_7.status = FINISHED
                text_norm_7.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in thank_youComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "thank_you" ---
    for thisComponent in thank_youComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.000000)
    
    # mark experiment as finished
    endExperiment(thisExp, win=win, inputs=inputs)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, inputs=None, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()


def quit(thisExp, win=None, inputs=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    inputs : dict
        Dictionary of input devices by name.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    inputs = setupInputs(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win, 
        inputs=inputs
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win, inputs=inputs)
