import type { ChessCourse } from '$lib/types/types';

class CartState {
	items = $state<ChessCourse[]>([]);
	key = 'cart';
	constructor() {
		this.loadFromStorage();

		$effect.root(() => {
			$effect(() => {
				localStorage.setItem(this.key, JSON.stringify(this.items));
				console.log('💾 Storage Updated:', $state.snapshot(this.items));
			});
		});
	}

	private loadFromStorage() {
		const saved = localStorage.getItem(this.key);
		if (saved) {
			try {
				this.items = JSON.parse(saved);
			} catch (e) {
				console.error('Gagal parse data storage', e);
				this.items = [];
			}
		}
	}

	addItem(product: ChessCourse) {
		const isDuplicate = this.items.some((item) => item.id === product.id);
		if (isDuplicate) return;
		this.items.push(product);
	}

	removeItem(id: string | number) {
		this.items = this.items.filter((i) => i.id !== id);
	}
}

export const cartState = new CartState();
