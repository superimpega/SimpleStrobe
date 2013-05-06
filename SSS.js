//Copyright - http://github.com/superimpega
//Free Use for developers, Must include This text otherwise you are not permitted to use this source

if ("/strobe on" == a) {log(Models.user.data.username + ' hit the strobe light!'); return RoomUser.audience.strobeMode(true), !0;};
if ("/strobe off" == a) return RoomUser.audience.strobeMode(false), !0;
if ("/rave on" == a) {log(Models.user.data.username + ' turned the lights down!'); return RoomUser.audience.lightsOut(true), !0;};
if ("/rave off" == a) return RoomUser.audience.lightsOut(false), !0;
if ("/users" == a) return UserListOverlay.show(), !0;
if ("/hd on" == a) return Playback.setHD(!0), !0;
if ("/hd off" == a) return Playback.setHD(!1), !0;
if ("/chat big" == a) return this.expand(), !0;
if ("/chat small" == a) return this.collapse(), !0;
if ("/afk" == a) return Models.user.changeStatus(1), !0;
if ("/back" == a) return Models.user.changeStatus(0), !0;
