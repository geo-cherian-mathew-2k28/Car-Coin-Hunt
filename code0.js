gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects1= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects2= [];
gdjs.MenuCode.GDScreenOrientationCheckerObjects3= [];
gdjs.MenuCode.GDMultiplayerObjects1= [];
gdjs.MenuCode.GDMultiplayerObjects2= [];
gdjs.MenuCode.GDMultiplayerObjects3= [];
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects1= [];
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects2= [];
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartObjects2[k] = gdjs.MenuCode.GDStartObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.MenuCode.GDMultiplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMultiplayerObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMultiplayerObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMultiplayerObjects2[k] = gdjs.MenuCode.GDMultiplayerObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMultiplayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.MenuCode.GDMultiplayerObjects1.length = 0;
gdjs.MenuCode.GDMultiplayerObjects2.length = 0;
gdjs.MenuCode.GDMultiplayerObjects3.length = 0;
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects1.length = 0;
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects2.length = 0;
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects3.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MenuCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.MenuCode.GDMultiplayerObjects1.length = 0;
gdjs.MenuCode.GDMultiplayerObjects2.length = 0;
gdjs.MenuCode.GDMultiplayerObjects3.length = 0;
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects1.length = 0;
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects2.length = 0;
gdjs.MenuCode.GDMale_9595Casual_9595HoodieObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
