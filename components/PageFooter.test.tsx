import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should render exchange rates update message', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should render copyright notice with current year', () => {
    const currentYear = new Date().getFullYear();
    render(<PageFooter />);
    
    const copyrightText = `© ${currentYear} Godel Technologies. All rights reserved.`;
    expect(screen.getByText(copyrightText)).toBeInTheDocument();
  });

  it('should display last updated time when provided', () => {
    const timestamp = 1697184000000; // Example timestamp
    render(<PageFooter lastUpdated={timestamp} />);
    
    const expectedDate = new Date(timestamp).toLocaleString();
    expect(screen.getByText(`Last updated: ${expectedDate}`)).toBeInTheDocument();
  });

  it('should not display last updated time when not provided', () => {
    render(<PageFooter />);
    
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });

  it('should render all elements in correct order', () => {
    const currentYear = new Date().getFullYear();
    const timestamp = 1697184000000;
    
    render(<PageFooter lastUpdated={timestamp} />);
    
    const paragraphs = screen.getAllByRole('paragraph');
    
    // Should have 3 paragraphs when lastUpdated is provided
    expect(paragraphs).toHaveLength(3);
    expect(paragraphs[0]).toHaveTextContent('Exchange rates are updated hourly');
    expect(paragraphs[1]).toHaveTextContent('Last updated:');
    expect(paragraphs[2]).toHaveTextContent(`© ${currentYear} Godel Technologies. All rights reserved.`);
  });
});
