<script lang="ts">
	import { Auth } from 'aws-amplify';

	let username = '';
	let psw = '';

	const signIn = async (username: string, password: string) => {
		try {
			console.log(username, password);
			const user = await Auth.signIn(username, password);
			console.log(user);
			return user;
		} catch (error) {
			console.error(error);
		}
	};

	const getCurrentUser = async () => {
		try {
			const user = await Auth.currentAuthenticatedUser({
				bypassCache: false,
			});
			console.log(user);
			console.info(JSON.stringify(user));
			return user;
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="container">
	<label for="uname"><b>Username</b></label>
	<input type="text" placeholder="Enter Username" name="uname" required bind:value={username} />

	<label for="psw"><b>Password</b></label>
	<input type="password" placeholder="Enter Password" name="psw" required bind:value={psw} />

	<button type="submit" on:click={() => signIn(username, psw)}>Login</button>
	<button on:click={() => getCurrentUser()}>GetUser</button>
</div>
