import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var storage = new Storage({
	// maximum capacity, default 1000
	size: 1000,

	// Use AsyncStorage for RN apps, or window.localStorage for web apps.
	// If storageBackend is not set, data will be lost after reload.
	storageBackend: AsyncStorage, // for web: window.localStorage

	// expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
	// can be null, which means never expire.
	defaultExpires: 1000 * 3600 * 24,

	// cache data in the memory. default is true.
	enableCache: true,

	// if data was not found in storage or expired data was found,
	// the corresponding sync method will be invoked returning
	// the latest data.
	sync : {
		// we'll talk about the details later.
	}
})

// I suggest you have one (and only one) storage instance in global scope.

// for web
// window.storage = storage;

// for react native
global.storage = storage;
