// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner'

test('sanity', () => {
  expect(true).toBe(true)
})

test('Spinner does not render if spinnerOn is false', () =>{
  render(<Spinner on={false}/>)
  const noSpin = screen.queryByText('Please wait...')
  expect(noSpin).not.toBeInTheDocument()
})

test('Spinner does render if spinnerOn is true', () =>{
  render(<Spinner on={true}/>)
  const Spin = screen.getByText('Please wait...')
  expect(Spin).toBeInTheDocument()
})