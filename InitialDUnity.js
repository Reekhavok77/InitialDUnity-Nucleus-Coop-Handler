Game.ExecutableName = "InitialDUnity.exe"; // Replace with exact game .exe
Game.GUID = "InitialDUnity";
Game.GameName = "InitialDUnity";
Game.Description = "IMPORTANT: after window resizing is done make a LAN lobby by pressing F1 on both instances/windows";
Game.MaxPlayers = 2;
Game.MaxPlayersOneMonitor = 2;
Game.PlayersPerInstance = 1;

// File & Environment Isolation
Game.SymlinkGame = true;
Game.UseNucleusEnvironment = true;
Game.FakeFocus = true;
Game.HookFocus = true;

// Window Management (Removes borders & forces custom split-screen sizes)
Game.SetWindowHook = true;
Game.ResetWindows = true;
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "InitialDUnity"; // Match the title bar text of the game window

// Enable ProtoInput for Unity Controller Isolation
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

// Block Raw Input so Unity doesn't read all connected controllers globally
Game.ProtoInput.RegisterRawInputHook = true;
Game.ProtoInput.GetRawInputDataHook = true;

// Route XInput per instance via ProtoInput
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true; // Crucial for Unity games!

// Focus & Message Filtering (Keeps background Unity instance alive)
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.FocusHooks = true

Game.Play = function() {
  var Args = " -screen-fullscreen 0 -popupwindow -screen-width " + Context.Width + " -screen-height " + Context.Height;
  Context.StartArguments = Args;
};