//Copyright - http://github.com/superimpega
//Free Use for developers, Must include This text otherwise you are not permitted to use this source
//How To use:
//Copy The line you want into your Bookmarks bar
// NOT ALL OF THEM.
// Seperately Copy each of these lines.
// Syntax:   What It Does
//          -------------
//          Javascript Code


//HOW TO USE - DETAILED:
// COPY THE CODE YOU WANT, For Example - "javascript:if ("/strobe on" == a) {log(Models.user.data.username + ' hit the strobe light!'); return RoomUser.audience.strobeMode(true), !0;};"
// OPEN A BOOKMARK IN CHROME
// PASTE THAT CODE INTO THE URL SECTION
// CLICK IT WHILE INSIDE THE PLUG.DJ WINDOW
// Type /strobe on Or /lights down or whatever it says you have to do!

//Picture Tutorial:
//1. http://gyazo.com/f112e2d0a040a845de4177fcc6055d10
//2. http://gyazo.com/7f3181660acbe49ded1323b3ed93bc3f
//3. Example: http://gyazo.com/522694bd257d47e08cfd6acea0a7cac7
//4. http://gyazo.com/99a1a516f823322e3c281946404a67db Click Inside Plug.DJ
//5. http://gyazo.com/c63af88f64afea59490a10ef24eebdab Type the command
//6. http://gyazo.com/9dfc5531f185f50b09e23452ad732499 Enjoy!

//Activate Strobe Lights
javascript:if ("/strobe on" == a) {log(Models.user.data.username + ' hit the strobe light!'); return RoomUser.audience.strobeMode(true), !0;};
//Disable Strobe Lights
javascript:if ("/strobe off" == a) return RoomUser.audience.strobeMode(false), !0;
//Turn The Lights Down
javascript:if ("/lights down" == a) {log(Models.user.data.username + ' turned the lights down!'); return RoomUser.audience.lightsOut(true), !0;};
//Turn The Lights Up
javascript:if ("/lights up" == a) return RoomUser.audience.lightsOut(false), !0;
//Display User List
javascript:if ("/users" == a) return UserListOverlay.show(), !0;
//Activate HD Video
javascript:if ("/hd on" == a) return Playback.setHD(!0), !0;
//Disable HD Video
javascript:if ("/hd off" == a) return Playback.setHD(!1), !0;
//Expand the Chat
javascript:if ("/chat big" == a) return this.expand(), !0;
//Decrease the Chat
javascript:if ("/chat small" == a) return this.collapse(), !0;
//Change your Status to AFK Mode
javascript:if ("/afk" == a) return Models.user.changeStatus(1), !0;
//Return to the status Before AFK Mode
javascript:if ("/back" == a) return Models.user.changeStatus(0), !0;
