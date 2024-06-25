import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyChecklistYorN from '../../Admin/View/Daily/DailyChecklistYorN';
import DailyChecklistText from '../../Admin/View/Daily/DailyChecklistText';
import DailyChecklistMCQ from '../../Admin/View/Daily/DailyChecklistMCQ';
import WeeklyChecklistYorN from '../../Admin/View/Weekly/WeeklyChecklistYorN';
import MonthlyChecklistYorN from '../../Admin/View/Monthly/MonthlyChecklistYorN';
import { Paper, Button, Box, Grid, Typography } from '@mui/material';

const UserChecklist = () => {
  const [templates, setTemplates] = useState([]);
  const [displayedTemplateId, setDisplayedTemplateId] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get('http://localhost:3001/templates');
        setTemplates(response.data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, []);

  const handleDisplayChecklist = (templateId) => {
    setDisplayedTemplateId(templateId);
  };

  const handleBackToGrid = () => {
    setDisplayedTemplateId(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: 2 }}>
        {displayedTemplateId ? (
          <Paper sx={{ padding: 2 }}>
            <Button onClick={handleBackToGrid} variant="contained" color="primary" style={{ marginBottom: '10px' }}>
              Back to Checklist View
            </Button>
            {templates.map((template) => (
              template.id === displayedTemplateId && (
                <div key={template.id}>
                  {template.template === 'daily' && template.question_type === 'yesno' && (
                    <DailyChecklistYorN templateId={template.id} />
                  )}
                  {template.template === 'daily' && template.question_type === 'text' && (
                    <DailyChecklistText templateId={template.id} />
                  )}
                  {template.template === 'daily' && template.question_type === 'mcq' && (
                    <DailyChecklistMCQ templateId={template.id} />
                  )}
                  {template.template === 'weekly' && template.question_type === 'yesno' && (
                    <WeeklyChecklistYorN templateId={template.id} />
                  )}
                  {template.template === 'monthly' && template.question_type === 'yesno' && (
                    <MonthlyChecklistYorN templateId={template.id} />
                  )}
                </div>
              )
            ))}
          </Paper>
        ) : (
          <Grid container spacing={2}>
            {templates.map((template) => (
              <Grid key={template.id} item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    height: '10cm',
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ flex: 1, overflowY: 'auto' }}>
                    {template.template === 'daily' && template.question_type === 'yesno' && (
                      <DailyChecklistYorN templateId={template.id} />
                    )}
                    {template.template === 'daily' && template.question_type === 'text' && (
                      <DailyChecklistText templateId={template.id} />
                    )}
                    {template.template === 'daily' && template.question_type === 'mcq' && (
                      <DailyChecklistMCQ templateId={template.id} />
                    )}
                    {template.template === 'weekly' && template.question_type === 'yesno' && (
                      <WeeklyChecklistYorN templateId={template.id} />
                    )}
                    {template.template === 'monthly' && template.question_type === 'yesno' && (
                      <MonthlyChecklistYorN templateId={template.id} />
                    )}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDisplayChecklist(template.id)}
                  >
                    Display Checklist
                  </Button>
                </Paper>
              </Grid>
            ))}
            {templates.length === 0 && (
              <Typography variant="body1" gutterBottom>
                No templates available.
              </Typography>
            )}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default UserChecklist;
