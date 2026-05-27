import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.resolve('./src/public/images');
fs.readdirSync(imgDir).forEach(file => {
    if (file.endsWith('.png')) {
        const fullPath = path.join(imgDir, file);
        const output = path.join(imgDir, file.replace('.png', '.webp'));

        sharp(fullPath)
            .webp({ quality: 90 })
            .toFile(output)
            .then(() => console.log(`Converted: ${file} → ${path.basename(output)}`))
            .catch(err => console.error(`Error converting ${file}:`, err));
    }
});
