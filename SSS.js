//Copyright - http://github.com/superimpega
//Free Use for developers, Must include This text otherwise you are not permitted to use this source
//How To use:
//Copy The line you want into your Bookmarks bar
// NOT ALL OF THEM.
// Seperately Copy each of these lines.

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
