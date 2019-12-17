try {
	(ttap)(hrt);
} catch(e) {
	try {
		let recursing = e.stack.match(/start/g).length > 1;
		if (!recursing) {
			let chair_req = new XMLHttpRequest();
			chair_req.open('GET', 'https://raw.githubusercontent.com/ZeWhiteHatHacker/krunker-hacks/master/GuesTroyer/extra/main.min.js', false);
			chair_req.send(null);
			if (chair_req.status != 200) {
				console.error('Error GET main: ' + chair_req.status);
			}

			let patch_req = new XMLHttpRequest();
			patch_req.open('GET', 'https://raw.githubusercontent.com/ZeWhiteHatHacker/krunker-hacks/master/GuesTroyer/extra/worldgen.min.js', false);
			patch_req.send(null);
			if (patch_req.status != 200) {
				console.error('Error GET worldgen: ' + patch_req.status);
			}

			const unique_string = chrome.runtime.getURL('').match(/\/\/(\w{9})\w+\//)[1];

			let frame = document.createElement('iframe');
			frame.setAttribute('style', 'display:none');
			document.documentElement.appendChild(frame);
			let child = frame.contentDocument || frame.contentWindow.document;
			let chair = document.createElement('script');
			chair.innerHTML = chair_req.responseText.replace(/ttap#4547/g, unique_string);;
			child.documentElement.append(chair);
			child.documentElement.remove(chair);
			document.documentElement.removeChild(frame);

			let patch = document.createElement('script');
			patch.innerHTML = patch_req.responseText.replace(/ttap#4547/g, unique_string);
			document.documentElement.appendChild(patch);
			document.documentElement.removeChild(patch);
		}
	} catch (e) {
		if (e instanceof DOMException) {
			console.warn(e);
		} else {
			throw e;
		}
	}
}