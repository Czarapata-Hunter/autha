import { getUser, signOutUser } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// make sure we have a user!
// > Part C:
//     - get the user (if there is one)
const user = getUser();
if (!user) {
    const base = location.pathname === '/' ? './' : '../';
    location.replace(`${base}auth/?redirectUrl=${encodeURIComponent(location)}`);
    /* location.pathname === '/' || location.pathname === '/solutions-web/user-auth/'
            ? './'
            : '../'; */
}

let error = null;
let profile = null;
//     - check if there is not a user and if so do the redirect
//       redirect code: location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);

// > Part B: attach event listener to signOutLink that calls signOutUser
signOutLink.addEventListener('click', signOutUser);

/* window.addEventListener('load', async () => {
    const response = await getProfile(user.id);
    error = response.error;
    profile = response.data;

    if (error) {
        return;
    }

    if (profile) {
        displayProfile();
    }
});

function displayProfile() {
    if (userAvatar && profile && profile.avatar_url) {
        userAvatar.src = profile.avatar_url;
    }
}
*/
