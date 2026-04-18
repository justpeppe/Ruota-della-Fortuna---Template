import { motion } from 'framer-motion'

function Tile({ letter, revealed, delay = 0 }) {
  const isLetter = Boolean(letter && letter !== ' ')
  const MotionDiv = motion.div

  if (!isLetter) {
    return <div className="h-12 rounded-md bg-transparent md:h-14" aria-hidden="true" />
  }

  return (
    <MotionDiv
      initial={{ rotateY: 180 }}
      animate={{ rotateY: revealed ? 0 : 180 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="tile-3d h-12 rounded-md border border-neon-cyan/60 bg-tile text-lg font-black text-white md:h-14 md:text-xl"
    >
      {revealed ? letter : ''}
    </MotionDiv>
  )
}

export default Tile
