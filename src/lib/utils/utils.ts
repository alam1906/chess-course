import type { ChessCourse } from '$lib/types/types';

export function cleanTitle(text: string) {
	return (
		text
			// 1. Hapus teks di dalam kurung siku standar [ ] dan kurung siku tebal 【 】
			.replace(/\[.*?\]|【.*?】/g, '')
			// 2. Hapus karakter Mandarin/Hanzi (rentang Unicode Asia Timur)
			.replace(/[\u4e00-\u9fa5]/g, '')
			// 3. Hapus karakter khusus atau simbol sisa yang bukan alfanumerik/tanda baca standar
			// Ini akan menangkap sisa-sisa simbol dekoratif jika ada
			// eslint-disable-next-line no-control-regex
			.replace(/[^\x00-\x7F]/g, '')
			// 4. Rapikan spasi ganda dan trim
			.replace(/\s+/g, ' ')
			.trim()
	);
}

export function createWhatsappLink(courses: ChessCourse[]) {
	const courseText = courses.map((item, index) => `${index + 1}. ${item.title}`).join('\n');

	const message = `
Halo, saya ingin membeli course berikut:
${courseText}`;

	return `https://wa.me/${+6281292464061}?text=${encodeURIComponent(message)}`;
}
