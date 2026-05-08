<script>
	// @ts-nocheck

	let { visible = false } = $props();
</script>

{#if visible}
	<div class="toast" style="background : #2563eb">Course ditambahkan ke keranjang</div>
{/if}

<style>
	.toast {
		position: fixed;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);

		background: #18181b;
		color: white;

		padding: 14px 20px;
		border-radius: 12px;

		font-size: 14px;
		font-weight: 600;

		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

		z-index: 9999;

		animation: slideDown 0.25s ease;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translate(-50%, -10px);
		}

		to {
			opacity: 1;
			transform: translate(-50%, 0);
		}
	}
</style>
